import type { SourceFile } from './types';
import { isAuditable, isImagePath, isSecretEnvPath, isThirdPartyPath } from './rules';

const CACHE_OR_OUTPUT_DIRS = new Set(['node_modules', '.git', '.next', 'dist', 'build', 'coverage', '.turbo', '.cache']);
const GENERIC_LIBRARY_ROOTS = new Set(['vendor','vendors','plugin','plugins','library','libraries','lib','libs','external','externals','third-party','third_party','thirdparty']);
const IMAGE_RE = /\.(png|jpe?g|gif|webp|svg)$/i;
const MAX_FILES = 5000;
const MAX_TEXT_FILE_BYTES = 2_000_000;
const MAX_TOTAL_TEXT_BYTES = 40_000_000;
const MAX_LIBRARY_STYLE_BYTES = 5_000_000;
const MAX_LIBRARY_SELECTORS = 12_000;

function shouldSkipDir(name:string) {
  const n=name.toLowerCase();
  return CACHE_OR_OUTPUT_DIRS.has(n) || isThirdPartyPath(n);
}

function normalizeLibraryPrefix(value:string){
  const base=value.toLowerCase().replace(/\.(?:min\.)?(?:css|js|mjs|cjs)$/,'').replace(/^(?:jquery|bootstrap)[.-]?v?/,'$&');
  if(/^mfp(?:[._-]|$)|^mailformpro/i.test(base)) return 'mfp';
  const token=base.replace(/^[_\.\-]+/,'').replace(/(?:[-_.]?v?\d+(?:\.\d+)*)+$/,'').replace(/[^a-z0-9_-].*$/,'').replace(/[-_.]+$/,'');
  return token.length>=2 ? token : '';
}

/** Infer selector prefixes from skipped third-party paths so first-party override SCSS can also ignore library-owned selectors. */
export function inferLibraryPrefixesFromPaths(paths:string[]){
  const out=new Set<string>();
  for(const raw of paths){
    const parts=raw.replace(/\\/g,'/').split('/').filter(Boolean);
    for(let i=0;i<parts.length;i++){
      const seg=parts[i].toLowerCase();
      if(GENERIC_LIBRARY_ROOTS.has(seg) && parts[i+1]){
        const p=normalizeLibraryPrefix(parts[i+1]); if(p)out.add(p);
      }
      if(isThirdPartyPath(seg) && !GENERIC_LIBRARY_ROOTS.has(seg) && !CACHE_OR_OUTPUT_DIRS.has(seg)){
        const p=normalizeLibraryPrefix(seg); if(p)out.add(p);
      }
    }
  }
  return [...out];
}

export function extractLibrarySelectors(content:string){
  const cleaned=content.replace(/\/\*[\s\S]*?\*\//g,' ');
  const out=new Set<string>();
  const re=/(^|[};])\s*([^@{}][^{}]*)\{/gm;
  let m:RegExpExecArray|null;
  while((m=re.exec(cleaned))&&out.size<MAX_LIBRARY_SELECTORS){
    for(const token of m[2].matchAll(/[.#]([A-Za-z_][\w-]*)/g)){
      out.add(token[1].toLowerCase());
      if(out.size>=MAX_LIBRARY_SELECTORS)break;
    }
  }
  return [...out];
}

export type FolderReadResult = {
  files: SourceFile[];
  rootName: string;
  skipped: number;
  textBytes: number;
  smartSkippedOutput: boolean;
  libraryPrefixes: string[];
  librarySelectors: string[];
};

function shouldTrack(path: string) {
  return isAuditable(path) || IMAGE_RE.test(path) || isSecretEnvPath(path);
}

async function fileToSource(file: File, path: string, budget: { bytes: number }): Promise<SourceFile | null> {
  if (!shouldTrack(path)) return null;
  if (isSecretEnvPath(path)) return { path, content: '', kind:'config' } satisfies SourceFile;
  if (isImagePath(path) && !/\.svg$/i.test(path)) return { path, content: '', kind:'image' } satisfies SourceFile;
  if (file.size > MAX_TEXT_FILE_BYTES || budget.bytes + file.size > MAX_TOTAL_TEXT_BYTES) return null;
  budget.bytes += file.size;
  return { path, content: await file.text() } satisfies SourceFile;
}

export async function readFolderFileList(list: FileList): Promise<FolderReadResult> {
  const files: SourceFile[] = [];
  const budget = { bytes: 0 };
  let skipped = 0;
  const all = Array.from(list);
  const allPaths=all.map(f => (f as File & { webkitRelativePath?: string }).webkitRelativePath || f.name);
  const libraryPrefixes=inferLibraryPrefixesFromPaths(allPaths);
  const librarySelectorSet=new Set<string>();
  let libraryStyleBytes=0;
  for(const file of all){
    const rel=(file as File & {webkitRelativePath?:string}).webkitRelativePath||file.name;
    if(!isThirdPartyPath(rel)||!/.s?css$/i.test(rel)||file.size>1_000_000||libraryStyleBytes+file.size>MAX_LIBRARY_STYLE_BYTES)continue;
    try{
      libraryStyleBytes+=file.size;
      for(const selector of extractLibrarySelectors(await file.text())){librarySelectorSet.add(selector);if(librarySelectorSet.size>=MAX_LIBRARY_SELECTORS)break}
    }catch{}
    if(librarySelectorSet.size>=MAX_LIBRARY_SELECTORS)break;
  }
  // Prefer likely source/auditable files before applying the safety file cap.
  const prioritized=[...all].sort((a,b)=>{
    const pa=(a as File & {webkitRelativePath?:string}).webkitRelativePath||a.name;
    const pb=(b as File & {webkitRelativePath?:string}).webkitRelativePath||b.name;
    const sa=(isThirdPartyPath(pa)?2:shouldTrack(pa)?0:1), sb=(isThirdPartyPath(pb)?2:shouldTrack(pb)?0:1);
    return sa-sb;
  });
  const incoming = prioritized.slice(0, MAX_FILES);
  if (list.length > MAX_FILES) skipped += list.length - MAX_FILES;
  const firstRel = (allPaths[0] || 'task-folder');
  const rootName = firstRel.split('/')[0] || 'task-folder';

  const prefix = `${rootName}/`;
  const hasSrc = allPaths.some(p => p.startsWith(`${prefix}src/`));
  const hasPublic = allPaths.some(p => p.startsWith(`${prefix}public/`));
  const hasScripts = allPaths.some(p => p.startsWith(`${prefix}scripts/`));
  const smartSkippedOutput = hasSrc && hasPublic && hasScripts;

  for (const file of incoming) {
    const rel = (file as File & { webkitRelativePath?: string }).webkitRelativePath || file.name;
    const parts = rel.split('/');
    const relativeParts = parts[0] === rootName ? parts.slice(1) : parts;
    if (relativeParts.some(p => shouldSkipDir(p)) || isThirdPartyPath(rel)) { skipped++; continue; }
    if (smartSkippedOutput && relativeParts[0] === 'public') { skipped++; continue; }
    const source = await fileToSource(file, rel, budget);
    if (source) files.push(source); else skipped++;
  }
  return { files, rootName, skipped, textBytes: budget.bytes, smartSkippedOutput, libraryPrefixes, librarySelectors:[...librarySelectorSet] };
}

export async function readDirectoryHandle(root: any): Promise<FolderReadResult> {
  const files: SourceFile[] = [];
  const budget = { bytes: 0 };
  let skipped = 0;
  const libraryPrefixSet=new Set<string>();
  const librarySelectorSet=new Set<string>();
  let libraryStyleBytes=0;
  const rootNames = new Set<string>();
  for await (const [name] of root.entries()) rootNames.add(name);
  const smartSkippedOutput = rootNames.has('src') && rootNames.has('public') && rootNames.has('scripts');

  async function collectSkippedLibraryNames(dir:any, name:string){
    const own=normalizeLibraryPrefix(name); if(own && !GENERIC_LIBRARY_ROOTS.has(name.toLowerCase()))libraryPrefixSet.add(own);
    async function inspect(node:any,depth:number){
      if(depth>5||librarySelectorSet.size>=MAX_LIBRARY_SELECTORS||libraryStyleBytes>=MAX_LIBRARY_STYLE_BYTES)return;
      try{
        for await(const [child,handle] of node.entries()){
          if(handle.kind==='directory'){
            if(depth===0){const p=normalizeLibraryPrefix(child);if(p)libraryPrefixSet.add(p)}
            await inspect(handle,depth+1);
          }else if(/\.s?css$/i.test(child)){
            const file=await handle.getFile();
            if(file.size>1_000_000||libraryStyleBytes+file.size>MAX_LIBRARY_STYLE_BYTES)continue;
            libraryStyleBytes+=file.size;
            for(const selector of extractLibrarySelectors(await file.text())){librarySelectorSet.add(selector);if(librarySelectorSet.size>=MAX_LIBRARY_SELECTORS)break}
          }
          if(librarySelectorSet.size>=MAX_LIBRARY_SELECTORS||libraryStyleBytes>=MAX_LIBRARY_STYLE_BYTES)break;
        }
      }catch{}
    }
    await inspect(dir,0);
  }

  async function walk(dir: any, prefix: string, depth: number) {
    for await (const [name, handle] of dir.entries()) {
      if (files.length >= MAX_FILES) { skipped++; continue; }
      if (handle.kind === 'directory') {
        const full=`${prefix}${name}/`;
        if (shouldSkipDir(name) || isThirdPartyPath(full)) { await collectSkippedLibraryNames(handle,name); skipped++; continue; }
        if (smartSkippedOutput && depth === 0 && name === 'public') { skipped++; continue; }
        await walk(handle, full, depth + 1);
      } else if (handle.kind === 'file') {
        const file = await handle.getFile();
        const path = `${prefix}${name}`;
        if(isThirdPartyPath(path)){skipped++;continue;}
        const source = await fileToSource(file, path, budget);
        if (source) files.push(source); else skipped++;
      }
    }
  }

  await walk(root, '', 0);
  return { files, rootName: root.name || 'task-folder', skipped, textBytes: budget.bytes, smartSkippedOutput, libraryPrefixes:[...libraryPrefixSet], librarySelectors:[...librarySelectorSet] };
}
