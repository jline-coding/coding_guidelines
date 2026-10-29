import Head from 'next/head';
import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import JSZip from 'jszip';
import { auditFiles, guidelineUrl, isAuditable, isImagePath, isSecretEnvPath, isThirdPartyPath } from '@/lib/rules';
import { extractLibrarySelectors, inferLibraryPrefixesFromPaths, readDirectoryHandle, readFolderFileList } from '@/lib/folder-reader';
import { categoryLabel, gateLabel, pick, tx, ui } from '@/lib/i18n';
import type { AuditMode, AuditResult, Category, Finding, Language, LocalizedText, SourceFile, WebsiteScanResponse } from '@/lib/types';

const categories: Category[] = ['markup','linksSeo','accessibility','cssFlocss','javascript','images','wordpress','structureDelivery','responsive','manualReview'];
const TRACK_RE=/\.(?:html?|ejs|php|css|scss|sass|js|mjs|cjs|ts|tsx|jsx|json|md|txt|ya?ml|xml|svg|png|jpe?g|gif|webp|ico)$/i;
const SKIP=/(^|\/)(?:node_modules|\.git|\.next|dist|build|coverage|\.turbo|\.cache)(\/|$)/i;
const MAX_ZIP_FILES=5000;
const MAX_ZIP_TEXT_FILE_BYTES=2_000_000;
const MAX_ZIP_TOTAL_TEXT_BYTES=40_000_000;

type IssueLevel='error'|'warning';
type FindingGroup={ruleId:string;category:Category;level:IssueLevel;items:Finding[]};
type WebsiteMeta={
  pages:number;
  assets:number;
  warnings:LocalizedText[];
  sites:WebsiteScanResponse['sites'];
  targets:string[];
  pageUrls:string[];
  crawlInternal:boolean;
  maxPagesPerUrl:number;
};

function m(vi:string,ja:string,en?:string):LocalizedText{return tx(vi,ja,en)}
function issueLevel(f:Finding):IssueLevel{return f.confidence==='deterministic'?'error':'warning'}
function csvCell(v:string){return `"${String(v??'').replace(/"/g,'""')}"`}
function downloadReport(result:AuditResult, project:string, lang:Language){
  const rows=[
    ['Rule ID','Category','Level','File/URL','Line','Title','Message','Recommendation','Guideline'],
    ...result.findings.map(f=>[
      f.ruleId,
      pick(categoryLabel[f.category],lang),
      issueLevel(f)==='error'?(lang==='vi'?'LỖI':lang==='ja'?'エラー':'ERROR'):(lang==='vi'?'CẢNH BÁO':lang==='ja'?'警告':'WARNING'),
      f.file,
      String(f.line||''),
      pick(f.title,lang),
      pick(f.message,lang),
      pick(f.recommendation,lang),
      pick(f.guidelineSection,lang),
    ])
  ];
  const blob=new Blob(['\ufeff'+rows.map(r=>r.map(csvCell).join(',')).join('\n')],{type:'text/csv;charset=utf-8'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=`${project||'audit'}-jline-guideline-report.csv`;
  a.click();
  URL.revokeObjectURL(a.href);
}

type ZipReadResult={files:SourceFile[];skipped:number;libraryPrefixes:string[];librarySelectors:string[]};
async function readZip(file:File):Promise<ZipReadResult>{
  const zip=await JSZip.loadAsync(file);
  const rawNames=Object.keys(zip.files).filter(n=>!zip.files[n].dir&&!SKIP.test(n));
  const libraryPrefixes=inferLibraryPrefixesFromPaths(rawNames);
  const librarySelectorSet=new Set<string>();
  let libraryStyleBytes=0;
  for(const name of rawNames){
    if(!isThirdPartyPath(name)||!/.s?css$/i.test(name)||libraryStyleBytes>=5_000_000)continue;
    const entry:any=zip.files[name];
    const declared=Number(entry?._data?.uncompressedSize||0);
    if(declared>1_000_000||libraryStyleBytes+declared>5_000_000)continue;
    try{
      const css=await entry.async('string');
      const size=new TextEncoder().encode(css).byteLength;
      if(size>1_000_000||libraryStyleBytes+size>5_000_000)continue;
      libraryStyleBytes+=size;
      for(const token of extractLibrarySelectors(css)){librarySelectorSet.add(token);if(librarySelectorSet.size>=12000)break}
    }catch{}
    if(librarySelectorSet.size>=12000)break;
  }
  const allNames=rawNames.filter(n=>!isThirdPartyPath(n));
  const names=[...allNames].sort((a,b)=>{const sa=(isAuditable(a)||isImagePath(a)||isSecretEnvPath(a))?0:1;const sb=(isAuditable(b)||isImagePath(b)||isSecretEnvPath(b))?0:1;return sa-sb}).slice(0,MAX_ZIP_FILES);
  let skipped=(rawNames.length-allNames.length)+Math.max(0,allNames.length-names.length);
  let textBytes=0;
  const hasSrc=names.some(n=>/(^|\/)src\//.test(n));
  const hasPublic=names.some(n=>/(^|\/)public\//.test(n));
  const hasScripts=names.some(n=>/(^|\/)scripts\//.test(n));
  const out:SourceFile[]=[];
  for(const name of names){
    if(hasSrc&&hasPublic&&hasScripts&&/(^|\/)public\//.test(name)){skipped++;continue;}
    if(!TRACK_RE.test(name)&&!isAuditable(name)&&!isSecretEnvPath(name)){skipped++;continue;}
    if(isImagePath(name)&&!/\.svg$/i.test(name)){out.push({path:name,content:'',kind:'image'});continue;}
    if(isSecretEnvPath(name)){out.push({path:name,content:'',kind:'config'});continue;}
    if(isAuditable(name)||/\.gitignore$/.test(name)){
      const entry:any=zip.files[name];
      const declaredSize=Number(entry?._data?.uncompressedSize||0);
      if(declaredSize>MAX_ZIP_TEXT_FILE_BYTES||textBytes+declaredSize>MAX_ZIP_TOTAL_TEXT_BYTES){skipped++;continue;}
      const content=await entry.async('string');
      const size=new TextEncoder().encode(content).byteLength;
      if(size>MAX_ZIP_TEXT_FILE_BYTES||textBytes+size>MAX_ZIP_TOTAL_TEXT_BYTES){skipped++;continue;}
      textBytes+=size;
      out.push({path:name,content});
    }
  }
  return {files:out,skipped,libraryPrefixes,librarySelectors:[...librarySelectorSet]};
}

function groupFindings(items:Finding[]):FindingGroup[]{
  const map=new Map<string,FindingGroup>();
  for(const f of items){
    const key=f.ruleId;
    const found=map.get(key);
    if(found){found.items.push(f);continue;}
    map.set(key,{ruleId:f.ruleId,category:f.category,level:issueLevel(f),items:[f]});
  }
  return [...map.values()].sort((a,b)=>{
    if(a.level!==b.level)return a.level==='error'?-1:1;
    return b.items.length-a.items.length||a.ruleId.localeCompare(b.ruleId);
  });
}

export default function Home(){
  const [lang,setLang]=useState<Language>('vi');
  const T=ui[lang];
  const [inputMode,setInputMode]=useState<'folder'|'website'>('folder');
  const [result,setResult]=useState<AuditResult|null>(null);
  const [auditMode,setAuditMode]=useState<AuditMode>('source');
  const [project,setProject]=useState('');
  const [busy,setBusy]=useState(false);
  const [notice,setNotice]=useState<LocalizedText|null>(null);
  const [error,setError]=useState<LocalizedText|null>(null);
  const [siteUrls,setSiteUrls]=useState('');
  const [maxPages,setMaxPages]=useState(5);
  const [crawlInternal,setCrawlInternal]=useState(true);
  const [useBasicAuth,setUseBasicAuth]=useState(false);
  const [basicUsername,setBasicUsername]=useState('');
  const [basicPassword,setBasicPassword]=useState('');
  const [siteMeta,setSiteMeta]=useState<WebsiteMeta|null>(null);
  const [category,setCategory]=useState<'all'|Category>('all');
  const [level,setLevel]=useState<'all'|IssueLevel>('all');
  const [query,setQuery]=useState('');
  const [pageFilter,setPageFilter]=useState('all');
  const folderInput=useRef<HTMLInputElement>(null);
  const zipInput=useRef<HTMLInputElement>(null);

  useEffect(()=>{
    const saved=localStorage.getItem('jl-auditor-lang');
    if(saved==='vi'||saved==='ja'||saved==='en'){setLang(saved);return;}
    let cancelled=false;
    const fallback=()=>{
      if(cancelled)return;
      const browser=(navigator.language||'').toLowerCase();
      setLang(browser.startsWith('ja')?'ja':browser.startsWith('vi')?'vi':'en');
    };
    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),3000);
    fetch('/api/detect-country',{cache:'no-store',signal:controller.signal})
      .then(r=>r.ok?r.json():Promise.reject())
      .then(data=>{
        if(cancelled)return;
        const country=String(data?.country||'').toUpperCase();
        setLang(country==='JP'?'ja':country==='VN'?'vi':'en');
      })
      .catch(fallback)
      .finally(()=>clearTimeout(timer));
    return()=>{cancelled=true;controller.abort();clearTimeout(timer)};
  },[]);

  function changeLang(v:Language){setLang(v);localStorage.setItem('jl-auditor-lang',v)}

  const filtered=useMemo(()=>{
    if(!result)return [];
    const q=query.trim().toLowerCase();
    return result.findings.filter(f=>
      (category==='all'||f.category===category)&&
      (level==='all'||issueLevel(f)===level)&&
      (pageFilter==='all'||f.file===pageFilter)&&
      (!q||`${f.ruleId} ${f.file} ${pick(f.title,lang)} ${pick(f.message,lang)}`.toLowerCase().includes(q))
    );
  },[result,category,level,pageFilter,query,lang]);

  const grouped=useMemo(()=>groupFindings(filtered),[filtered]);
  const allGroups=useMemo(()=>result?groupFindings(result.findings):[],[result]);
  const pageScopedGroups=useMemo(()=>result?groupFindings(result.findings.filter(f=>pageFilter==='all'||f.file===pageFilter)):[],[result,pageFilter]);
  const pageStats=useMemo(()=>{
    if(!result||!siteMeta)return [];
    const map=new Map<string,{errors:number;warnings:number}>();
    for(const url of siteMeta.pageUrls)map.set(url,{errors:0,warnings:0});
    for(const f of result.findings){
      const stat=map.get(f.file);
      if(!stat)continue;
      if(issueLevel(f)==='error')stat.errors++;else stat.warnings++;
    }
    return [...map.entries()].map(([url,counts])=>({url,...counts}));
  },[result,siteMeta]);
  const errorCount=result?result.findings.filter(f=>issueLevel(f)==='error').length:0;
  const warningCount=result?result.findings.filter(f=>issueLevel(f)==='warning').length:0;
  const errorGroupCount=allGroups.filter(g=>g.level==='error').length;
  const warningGroupCount=allGroups.filter(g=>g.level==='warning').length;

  const manualFiltered=useMemo(()=>{
    if(!result||level==='error')return [];
    return result.manualChecks.filter(x=>category==='all'||category==='manualReview'||x.category===category);
  },[result,category,level]);

  const tabCounts=useMemo(()=>{
    const counts={} as Record<Category,number>;
    for(const c of categories)counts[c]=0;
    if(!result)return counts;
    for(const g of pageScopedGroups)counts[g.category]++;
    for(const item of result.manualChecks)counts[item.category]++;
    return counts;
  },[result,pageScopedGroups]);

  function resetMessages(){setError(null);setNotice(null);setSiteMeta(null)}
  function resetFilters(){setCategory('all');setLevel('all');setPageFilter('all');setQuery('')}

  async function runFolder(read:()=>Promise<any>){
    setBusy(true);resetMessages();resetFilters();
    try{
      const d=await read();
      if(!d.files.length)throw new Error('empty');
      setProject(d.rootName);
      setAuditMode('source');
      setResult(auditFiles(d.files,{mode:'source',libraryPrefixes:d.libraryPrefixes||[],librarySelectors:d.librarySelectors||[]}));
      setNotice(m(
        `Đã đọc ${d.files.length} resource. ${d.smartSkippedOutput?'Đã bỏ qua public build output để tránh finding trùng.':''}${d.libraryPrefixes?.length?` Đã loại thư viện bên thứ ba: ${d.libraryPrefixes.join(', ')}.`:''}`,
        `${d.files.length} 件のリソースを読み込みました。${d.smartSkippedOutput?'重複検出を防ぐため、自動生成されたpublic配下のビルド成果物はスキップされました。':''}${d.libraryPrefixes?.length?` 外部ライブラリを除外: ${d.libraryPrefixes.join(', ')}。`:''}`,
        `Read ${d.files.length} resources. ${d.smartSkippedOutput?'Generated public build output was skipped to avoid duplicate findings.':''}${d.libraryPrefixes?.length?` Third-party libraries excluded: ${d.libraryPrefixes.join(', ')}.`:''}`
      ));
    }catch{
      setError(m('Không thể đọc thư mục hoặc không có file phù hợp.','フォルダを読み込めないか、対象となるファイルが見つかりませんでした。','The folder could not be read or contains no auditable files.'));
    }finally{setBusy(false)}
  }

  async function chooseFolder(){
    const w=window as any;
    if(typeof w.showDirectoryPicker==='function'){
      try{
        const h=await w.showDirectoryPicker({mode:'read'});
        await runFolder(()=>readDirectoryHandle(h));
        return;
      }catch(e:any){if(e?.name==='AbortError')return}
    }
    folderInput.current?.click();
  }

  async function onFolderFiles(list?:FileList|null){
    if(list?.length)await runFolder(()=>readFolderFileList(list));
    if(folderInput.current)folderInput.current.value='';
  }

  async function onZip(file?:File){
    if(!file)return;
    setBusy(true);resetMessages();resetFilters();
    try{
      const zipResult=await readZip(file);
      const files=zipResult.files;
      if(!files.length)throw new Error('empty');
      setProject(file.name.replace(/\.zip$/i,''));
      setAuditMode('source');
      setResult(auditFiles(files,{mode:'source',libraryPrefixes:zipResult.libraryPrefixes||[],librarySelectors:zipResult.librarySelectors||[]}));
      setNotice(m(
        `Đã đọc ${files.length} resource từ ZIP.${zipResult.skipped?` Bỏ qua ${zipResult.skipped} file thư viện/output/không cần hoặc vượt giới hạn an toàn.`:''}${zipResult.libraryPrefixes.length?` Đã loại thư viện: ${zipResult.libraryPrefixes.join(', ')}.`:''}`,
        `ZIPから ${files.length} 件のリソースを読み込みました。${zipResult.skipped?` 安全上の制限または監査対象外として ${zipResult.skipped} 件をスキップしました。`:''}${zipResult.libraryPrefixes.length?` 外部ライブラリを除外: ${zipResult.libraryPrefixes.join(', ')}。`:''}`,
        `Read ${files.length} resources from ZIP.${zipResult.skipped?` Skipped ${zipResult.skipped} third-party, generated, unsupported, or safety-limited files.`:''}${zipResult.libraryPrefixes.length?` Libraries excluded: ${zipResult.libraryPrefixes.join(', ')}.`:''}`
      ));
    }catch{
      setError(m('Không thể đọc ZIP hoặc ZIP không có file phù hợp.','ZIPファイルを読み込めないか、監査対象ファイルがありません。','The ZIP could not be read or contains no auditable files.'));
    }finally{setBusy(false)}
  }

  async function scanWebsite(e:FormEvent){
    e.preventDefault();
    const urls=siteUrls.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
    if(!urls.length){setError(m('Vui lòng nhập ít nhất 1 URL website.','WebサイトURLを1件以上入力してください。','Enter at least one website URL.'));return}
    setBusy(true);resetMessages();resetFilters();
    try{
      const r=await fetch('/api/scan-site',{
        method:'POST',
        headers:{'content-type':'application/json'},
        cache:'no-store',
        body:JSON.stringify({
          urls,
          maxPages,
          crawlInternal,
          basicAuth:{enabled:useBasicAuth,username:basicUsername,password:basicPassword},
        }),
      });
      const data=await r.json();
      if(!r.ok){
        setError(m(data.error||'Không thể scan website.',data.errorJa||'Webサイトのスキャンに失敗しました。',data.errorEn||'The website scan failed.'));
        return;
      }
      const scan=data as WebsiteScanResponse;
      const hosts=[...new Set(scan.targets.map(x=>{try{return new URL(x).hostname}catch{return x}}))];
      setProject(hosts.length===1?`${hosts[0]}${scan.targets.length>1?` · ${scan.targets.length} URLs`:''}`:`${hosts.length} websites · ${scan.targets.length} URLs`);
      setAuditMode('website');
      setResult(auditFiles(scan.files,{mode:'website'}));
      setSiteMeta({
        pages:scan.pagesScanned,
        assets:scan.assetsDiscovered,
        warnings:scan.warnings,
        sites:scan.sites,
        targets:scan.targets,
        pageUrls:scan.files.map(f=>f.url||f.path),
        crawlInternal:scan.crawlInternal,
        maxPagesPerUrl:scan.maxPagesPerUrl,
      });
      setNotice(m(
        `Đã kiểm tra ${scan.targets.length} URL đầu vào, đọc ${scan.pagesScanned} trang và phát hiện ${scan.assetsDiscovered} CSS/JS asset.`,
        `${scan.targets.length} 件の入力URLを処理し、${scan.pagesScanned} ページを監査、${scan.assetsDiscovered} 件のCSS/JSアセットを検出しました。`,
        `Processed ${scan.targets.length} input URLs, audited ${scan.pagesScanned} pages, and discovered ${scan.assetsDiscovered} CSS/JS assets.`
      ));
    }catch{
      setError(m('Không thể kết nối tới bộ scan website.','Webサイトスキャナーに接続できませんでした。','Could not connect to the website scanner.'));
    }finally{
      if(useBasicAuth)setBasicPassword('');
      setBusy(false);
    }
  }

  const gateClass=result?`gate-${result.gateStatus}`:'';
  const levelError=T.errorLabel;
  const levelWarning=T.warningLabel;

  return <>
    <Head>
      <title>J-Line Rule Auditor</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
    <main className="shell">
      <header className="topbar">
        <div className="brand"><div className="logo">JL</div><div><strong>J-Line Rule Auditor</strong><span>{T.tagline}</span></div></div>
        <div className="topActions">
          <div className="langSwitch"><button className={lang==='vi'?'active':''} onClick={()=>changeLang('vi')}>VN</button><button className={lang==='ja'?'active':''} onClick={()=>changeLang('ja')}>JP</button><button className={lang==='en'?'active':''} onClick={()=>changeLang('en')}>EN</button></div>
          <a href={guidelineUrl} target="_blank" rel="noopener noreferrer">Coding Guidelines ↗</a>
        </div>
      </header>

      {!result?<>
        <section className="hero">
          <div className="heroCopy"><span className="eyebrow">{T.heroEyebrow}</span><h1>{T.heroTitle}</h1><p>{T.heroDesc}</p><div className="modeBadges"><span>{T.sourceAware}</span><span>{T.runtimeAware}</span><span>{T.bilingual}</span></div></div>
          <div className="auditPanel">
            <div className="tabs"><button className={inputMode==='folder'?'active':''} onClick={()=>setInputMode('folder')}>{T.folderTab}</button><button className={inputMode==='website'?'active':''} onClick={()=>setInputMode('website')}>{T.websiteTab}</button></div>
            {inputMode==='folder'?<div className="tabBody">
              <h2>{T.chooseFolder}</h2><p>{T.folderDesc}</p>
              <button className="primaryAction" onClick={chooseFolder} disabled={busy}>{busy?T.analyzing:T.chooseFolderBtn}</button>
              <input ref={folderInput} className="hiddenInput" type="file" multiple onChange={(e:any)=>onFolderFiles(e.target.files)} {...({webkitdirectory:'',directory:''} as any)}/>
              <div className="or"><span>{T.or}</span></div>
              <button className="secondaryAction" onClick={()=>zipInput.current?.click()}>{T.chooseZip}</button>
              <input ref={zipInput} className="hiddenInput" type="file" accept=".zip" onChange={(e:any)=>onZip(e.target.files?.[0])}/>
              <small>{T.folderPrivacy}</small>
            </div>:<form className="tabBody" onSubmit={scanWebsite}>
              <h2>{T.websiteTitle}</h2><p>{T.websiteDesc}</p>
              <label><span>{T.websiteUrls}</span><textarea rows={5} value={siteUrls} onChange={(e:any)=>setSiteUrls(e.target.value)} placeholder={'https://staging.example.com/\nhttps://staging.example.com/about/\nhttps://another.example.jp/'} spellCheck={false}/><small>{T.websiteUrlsHint}</small></label>
              <label className="checkRow"><input type="checkbox" checked={crawlInternal} onChange={(e:any)=>setCrawlInternal(e.target.checked)}/><span>{T.crawlInternal}</span></label>
              <label><span>{T.maxPagesPerUrl}</span><select value={maxPages} disabled={!crawlInternal} onChange={(e:any)=>setMaxPages(Number(e.target.value))}>{[1,3,5,10,20].map(n=><option key={n} value={n}>{n}</option>)}</select></label>
              <div className="authBox">
                <label className="checkRow"><input type="checkbox" checked={useBasicAuth} onChange={(e:any)=>{const enabled=e.target.checked;setUseBasicAuth(enabled);if(!enabled)setBasicPassword('')}}/><span>{T.useBasicAuth}</span></label>
                {useBasicAuth&&<div className="authFields"><label><span>{T.username}</span><input value={basicUsername} onChange={(e:any)=>setBasicUsername(e.target.value)} autoComplete="off"/></label><label><span>{T.password}</span><input type="password" value={basicPassword} onChange={(e:any)=>setBasicPassword(e.target.value)} autoComplete="off"/></label></div>}
                <small>{T.authHint}</small>
              </div>
              <button className="primaryAction" disabled={busy}>{busy?T.crawling:T.scanWebsite}</button>
              <small>{T.batchLimitHint}</small>
              <small>{T.privateHint}</small>
            </form>}
            {error&&<div className="panelMsg error">{pick(error,lang)}</div>}{notice&&<div className="panelMsg notice">{pick(notice,lang)}</div>}
          </div>
        </section>
        <section className="features"><article><b>01</b><h2>{T.feature1}</h2><p>{T.feature1d}</p></article><article><b>02</b><h2>{T.feature2}</h2><p>{T.feature2d}</p></article><article><b>03</b><h2>{T.feature3}</h2><p>{T.feature3d}</p></article></section>
      </>:<>
        <section className="contextBar"><div><span className={`modePill ${auditMode}`}>{auditMode==='source'?T.sourceAudit:T.websiteAudit}</span><strong>{project}</strong></div><button onClick={()=>{setResult(null);setProject('');setNotice(null);setError(null);setBasicPassword('');resetFilters()}}>{T.newAudit}</button></section>

        <section className="summary summarySimple">
          <div className={`gateCard ${gateClass}`}><span>{T.guidelineStatus}</span><strong>{pick(gateLabel[result.gateStatus],lang)}</strong><small>{result.rulesEvaluated}/{result.catalogSize} {T.rulesEvaluated}</small></div>
          <div className="scoreCard"><div className="score">{result.score}</div><div><span>{T.qualityScore}</span><strong>{project}</strong><small>{result.filesChecked} {T.resources} · {allGroups.length} {T.groups} · {result.findings.length} {T.locations}</small></div></div>
          <div className="metric errorMetric"><span>{levelError}</span><strong>{errorCount}</strong><small>{errorGroupCount} {T.groups}</small></div>
          <div className="metric warningMetric"><span>{levelWarning}</span><strong>{warningCount}</strong><small>{warningGroupCount} {T.groups}</small></div>
        </section>

        {auditMode==='source'&&(result.context.libraryPrefixes.length||result.context.librarySelectors.length)?<section className="thirdPartySummary"><b>{T.thirdPartyExcluded}</b><span>{result.context.libraryPrefixes.length?result.context.libraryPrefixes.join(', '):T.autoDetected} · {result.context.librarySelectors.length} {T.selectorOwnership}</span></section>:null}

        {siteMeta&&<section className="batchSummary"><div className="batchSummaryHead"><b>{T.batchSummary}</b><span>{siteMeta.targets.length} URLs · {siteMeta.pages} {T.pagesScanned}</span></div><div className="batchSiteGrid">{siteMeta.sites.map(site=><article key={site.origin}><strong>{site.origin}</strong><span>{site.seeds.length} {T.startUrls} · {site.pagesScanned} {T.pagesScanned} · {site.assetsDiscovered} {T.assets}</span></article>)}</div></section>}
        {siteMeta&&<details className="pageBreakdown"><summary><b>{T.pageBreakdown}</b><span>{pageStats.length} {T.pagesScanned}</span></summary><div className="pageBreakdownList">{pageStats.map(row=><button type="button" className={pageFilter===row.url?'active':''} key={row.url} onClick={()=>setPageFilter(row.url)}><span className="pageUrl">{row.url}</span><span className="pageCounts">{row.errors||row.warnings?<>{levelError} {row.errors} · {levelWarning} {row.warnings}</>:T.pageNoIssues}</span></button>)}</div></details>}
        {siteMeta?.warnings.length?<section className="warningBox"><b>{T.crawlNotes}</b><ul>{siteMeta.warnings.map((w,i)=><li key={i}>{pick(w,lang)}</li>)}</ul></section>:null}

        <section className="results">
          <div className="resultsHead"><div><h2>{T.auditFindings}</h2><p>{auditMode==='source'?T.sourceDesc:T.runtimeDesc}</p></div><button onClick={()=>downloadReport(result,project,lang)}>{T.exportCsv}</button></div>
          <div className="categoryTabs">
            <button className={category==='all'?'active':''} onClick={()=>setCategory('all')}>{T.all} <em>{pageScopedGroups.length+result.manualChecks.length}</em></button>
            {categories.map(c=><button key={c} className={category===c?'active':''} onClick={()=>setCategory(c)}>{pick(categoryLabel[c],lang)} <em>{tabCounts[c]}</em></button>)}
          </div>
          <div className={`filters filtersSimple ${auditMode==='website'?'websiteFilters':''}`}>
            <input placeholder={T.search} value={query} onChange={(e:any)=>setQuery(e.target.value)}/>
            <select value={level} onChange={(e:any)=>setLevel(e.target.value as 'all'|IssueLevel)}><option value="all">{lang==='vi'?'Tất cả Error / Warning':lang==='ja'?'すべてのエラー / 警告':'All Errors / Warnings'}</option><option value="error">{levelError}</option><option value="warning">{levelWarning}</option></select>
            {auditMode==='website'&&siteMeta&&<select value={pageFilter} onChange={(e:any)=>setPageFilter(e.target.value)}><option value="all">{T.allPages}</option>{siteMeta.pageUrls.map(url=><option key={url} value={url}>{url}</option>)}</select>}
          </div>

          {category==='manualReview'?null:<div className="findingList groupedList">
            {grouped.length?grouped.map(group=>{
              const first=group.items[0];
              return <details className={`findingGroup ${group.level}`} key={group.ruleId} open={group.items.length<=2}>
                <summary>
                  <div className="groupSummaryMain"><span className={`levelPill ${group.level}`}>{group.level==='error'?levelError:levelWarning}</span><span className="rule">{group.ruleId}</span><h3>{pick(first.title,lang)}</h3></div>
                  <div className="groupCount"><strong>{new Set(group.items.map(x=>x.file)).size} {T.affectedFiles} · {group.items.length}</strong><span>{T.locations}</span></div>
                </summary>
                <div className="groupBody">
                  <div className="groupGuidance"><div className="fix"><b>{T.fix}</b><span>{pick(first.recommendation,lang)}</span></div><div className="guidelineRef">{T.guideline}: {pick(first.guidelineSection,lang)}</div></div>
                  <div className="locationList">
                    {group.items.map((f,index)=><article className="locationItem" key={f.id}>
                      <div className="locationHead"><span className="locationIndex">#{index+1}</span><span className={`levelPill ${issueLevel(f)}`}>{issueLevel(f)==='error'?levelError:levelWarning}</span><span className="file">{T.location}: {f.file}{f.line?` · ${T.line} ${f.line}`:''}</span></div>
                      <p><b>{T.cause}: </b>{pick(f.message,lang)}</p>
                      {f.excerpt&&<pre>{f.excerpt}</pre>}
                    </article>)}
                  </div>
                </div>
              </details>;
            }):<div className="empty">{T.noFindings}</div>}
          </div>}

          {(level!=='error')&&(category==='all'||category==='manualReview'||manualFiltered.length>0)&&<div className="manualSection"><h2>{T.manualChecks}</h2><p>{T.manualDesc}</p><div className="manualGrid">{manualFiltered.length?manualFiltered.map(x=><article key={x.id}><span>{x.id}</span><h3>{pick(x.title,lang)}</h3><p>{pick(x.description,lang)}</p><small>{pick(x.guidelineSection,lang)}</small></article>):<div className="empty">{T.noManual}</div>}</div></div>}
        </section>
      </>}
      <footer>{T.footer}</footer>
    </main>
  </>;
}
