export type Language = 'vi' | 'ja' | 'en';
export type LocalizedText = { vi: string; ja: string; en?: string };

export type Severity = 'blocker' | 'major' | 'minor' | 'recommendation';
export type Confidence = 'deterministic' | 'probable' | 'manual';
export type AuditMode = 'source' | 'website';
export type GateStatus = 'pass' | 'pass_with_warnings' | 'fail' | 'blocked';

export type Category =
  | 'markup'
  | 'linksSeo'
  | 'accessibility'
  | 'cssFlocss'
  | 'javascript'
  | 'images'
  | 'wordpress'
  | 'structureDelivery'
  | 'responsive'
  | 'manualReview';

export type FileRole =
  | 'html-page'
  | 'html-partial'
  | 'ejs-page'
  | 'ejs-partial'
  | 'php-template'
  | 'php-partial'
  | 'php-logic'
  | 'css'
  | 'scss'
  | 'javascript'
  | 'image'
  | 'config'
  | 'runtime-html'
  | 'runtime-css'
  | 'runtime-js'
  | 'other';

export type SourceKind = 'html' | 'css' | 'js' | 'image' | 'config' | 'other';

export type SourceFile = {
  path: string;
  content: string;
  kind?: SourceKind;
  url?: string;
  size?: number;
};

export type Finding = {
  id: string;
  ruleId: string;
  category: Category;
  severity: Severity;
  confidence: Confidence;
  title: LocalizedText;
  message: LocalizedText;
  recommendation: LocalizedText;
  guidelineSection: LocalizedText;
  file: string;
  line?: number;
  excerpt?: string;
  reference: string;
};

export type ManualCheck = {
  id: string;
  category: Category;
  title: LocalizedText;
  description: LocalizedText;
  guidelineSection: LocalizedText;
  reference: string;
  appliesTo: AuditMode[];
};

export type RuleCatalogItem = {
  id: string;
  category: Category;
  severity: Severity;
  confidence: Confidence;
  title: LocalizedText;
  guidelineSection: LocalizedText;
  modes: AuditMode[];
  notes?: LocalizedText;
};

export type ProjectContext = {
  isWordPress: boolean;
  isJLineTemplate: boolean;
  hasSharpPipeline: boolean;
  hasGitignore: boolean;
  gitignoreContent: string;
  hasEnv: boolean;
  hasScss: boolean;
  thirdPartyIgnorePatterns: string[];
  libraryPrefixes: string[];
  librarySelectors: string[];
};

export type AuditResult = {
  score: number;
  gateStatus: GateStatus;
  findings: Finding[];
  manualChecks: ManualCheck[];
  filesChecked: number;
  rulesEvaluated: number;
  catalogSize: number;
  counts: Record<Severity, number>;
  confidenceCounts: Record<Confidence, number>;
  categoryCounts: Record<Category, number>;
  context: ProjectContext;
};

export type WebsiteScanWarning = LocalizedText;

export type WebsiteSiteSummary = {
  origin: string;
  seeds: string[];
  pagesScanned: number;
  assetsDiscovered: number;
  warnings: WebsiteScanWarning[];
};

export type WebsiteScanResponse = {
  target: string;
  targets: string[];
  files: SourceFile[];
  pagesScanned: number;
  assetsDiscovered: number;
  warnings: WebsiteScanWarning[];
  sites: WebsiteSiteSummary[];
  crawlInternal: boolean;
  maxPagesPerUrl: number;
};
