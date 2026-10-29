import type { Category, GateStatus, Language, LocalizedText } from './types';

export const tx = (vi: string, ja: string, en?: string): LocalizedText => ({ vi, ja, ...(en ? { en } : {}) });
export const pick = (text: LocalizedText, lang: Language) => {
  if (lang === 'en') return text.en || text.vi;
  return text[lang] || text.vi;
};

export const categoryLabel: Record<Category, LocalizedText> = {
  markup: tx('HTML & Semantic', 'HTML・セマンティック', 'HTML & Semantics'),
  linksSeo: tx('Links & SEO', 'リンク・SEO', 'Links & SEO'),
  accessibility: tx('Accessibility', 'アクセシビリティ', 'Accessibility'),
  cssFlocss: tx('CSS / FLOCSS', 'CSS / FLOCSS', 'CSS / FLOCSS'),
  javascript: tx('JavaScript', 'JavaScript', 'JavaScript'),
  images: tx('Hình ảnh', '画像', 'Images'),
  wordpress: tx('WordPress', 'WordPress', 'WordPress'),
  structureDelivery: tx('Cấu trúc & Bàn giao', 'ファイル構成・納品', 'Structure & Delivery'),
  responsive: tx('Responsive', 'レスポンシブ', 'Responsive'),
  manualReview: tx('Manual Review', '手動レビュー', 'Manual Review'),
};

export const gateLabel: Record<GateStatus, LocalizedText> = {
  pass: tx('PASS', '合格 (PASS)', 'PASS'),
  pass_with_warnings: tx('PASS CÓ CẢNH BÁO', '警告付き合格 (PASS WITH WARNINGS)', 'PASS WITH WARNINGS'),
  fail: tx('FAIL', '不合格 (FAIL)', 'FAIL'),
  blocked: tx('BLOCKED', '差し戻し (BLOCKED)', 'BLOCKED'),
};

export const ui = {
  vi: {
    tagline: 'Internal Coding Quality Gate', heroEyebrow: 'J-LINE WEB MARKETING · QUALITY AUDIT', heroTitle: 'Kiểm tra task theo Coding Guidelines',
    heroDesc: 'Chỉ kiểm tra theo Coding Guidelines chính thức của J-Line; phân biệt Error / Warning, nêu rõ nguyên nhân, file/dòng và gom lỗi cùng Rule ID để review nhanh.',
    sourceAware: 'Source-aware', runtimeAware: 'Runtime-aware', bilingual: 'VN / JP / EN', folderTab: 'Task Folder', websiteTab: 'Website URL',
    chooseFolder: 'Chọn thư mục task', folderDesc: 'Đọc source trực tiếp trên máy; tự nhận diện và loại code thư viện bên thứ ba, cache/build output. Thư viện đặc thù có thể khai báo bằng .jline-auditorignore.', chooseFolderBtn: 'Chọn thư mục task', chooseZip: 'Chọn ZIP task', or: 'hoặc', folderPrivacy: 'Source Folder/ZIP được phân tích ngay trong browser và không upload lên API.',
    websiteTitle: 'Kiểm tra Website URL', websiteDesc: 'Nhập một hoặc nhiều URL; có thể crawl link nội bộ và dùng Basic Authentication cho staging.', websiteUrl: 'Website URL', websiteUrls: 'Danh sách URL', websiteUrlsHint: 'Mỗi dòng 1 URL. Tối đa 20 URL đầu vào/lần scan; URL trùng tự loại bỏ.', maxPages: 'Số trang tối đa', maxPagesPerUrl: 'Số trang tối đa / URL đầu vào', crawlInternal: 'Crawl thêm link nội bộ từ các URL đã nhập', scanWebsite: 'Scan website', useBasicAuth: 'Sử dụng Basic Authentication', username: 'Username', password: 'Password', authHint: 'Credential chỉ dùng trong lần scan, không lưu localStorage và không ghi vào report.', batchLimitHint: 'Tối đa 20 URL đầu vào, 20 trang/URL và 100 trang thực tế mỗi lần scan.', privateHint: 'Private/local IP bị chặn mặc định. Staging nội bộ có thể bật ALLOW_PRIVATE_AUDIT_TARGETS=true.',
    analyzing: 'Đang phân tích…', crawling: 'Đang crawl & phân tích…', feature1: 'Rule engine có ngữ cảnh', feature1d: 'Phân biệt source/runtime, page/partial, WordPress và third-party để giảm false positive.', feature2: 'Error / Warning rõ ràng', feature2d: 'Error là vi phạm xác nhận được; Warning là trường hợp có ngoại lệ hoặc cần context.', feature3: 'Group lỗi thông minh', feature3d: 'Cùng Rule ID được gom thành group, vẫn hiển thị chính xác từng file và dòng.',
    newAudit: 'Audit mới', sourceAudit: 'KIỂM TRA SOURCE', websiteAudit: 'KIỂM TRA WEBSITE', guidelineStatus: 'TRẠNG THÁI GUIDELINE', errorLabel: 'LỖI', warningLabel: 'CẢNH BÁO', groups: 'nhóm', locations: 'vị trí', assets: 'tài nguyên', autoDetected: 'tự động nhận diện', qualityScore: 'QUALITY SCORE', resources: 'resources', findings: 'findings', rulesEvaluated: 'rules evaluated', exportCsv: 'Export CSV', auditFindings: 'Audit findings', sourceDesc: 'Chỉ áp dụng rule cho source do team sở hữu; thư viện bên thứ ba được loại khỏi audit.', runtimeDesc: 'Runtime checks chỉ đánh giá những gì có thể xác minh hợp lý từ output website.', search: 'Tìm theo file/URL, Rule ID, nội dung…', allSeverity: 'Tất cả mức độ', allConfidence: 'Tất cả kiểu kiểm tra', all: 'Tất cả', noFindings: 'Không có finding phù hợp bộ lọc.', fix: 'Cách sửa', cause: 'Nguyên nhân', guideline: 'Guideline', line: 'dòng', affectedFiles: 'file', location: 'Vị trí',
    thirdPartyExcluded: 'Đã loại khỏi audit: thư viện bên thứ ba', selectorOwnership: 'selector thư viện đã nhận diện', manualChecks: 'Checklist cần reviewer xác nhận', manualDesc: 'Các mục phụ thuộc design, browser, business context hoặc môi trường WordPress không tự động trừ điểm.', noManual: 'Không có manual check cho chế độ này.', crawlNotes: 'Ghi chú crawl', batchSummary: 'Tóm tắt Website Batch', pagesScanned: 'trang', startUrls: 'URL đầu vào', allPages: 'Tất cả trang đã kiểm tra', pageBreakdown: 'Kết quả theo từng trang', pageNoIssues: 'Không có Error/Warning', footer: 'Chỉ các quy định có căn cứ trong J-Line Coding Guidelines được kiểm tra. Guideline chính thức là nguồn chuẩn cuối cùng.',
  },
  ja: {
    tagline: '社内コーディング品質ゲート', heroEyebrow: 'J-LINE WEB MARKETING · 品質監査', heroTitle: 'コーディング規約に基づくタスク監査',
    heroDesc: 'J-Line公式Coding Guidelinesのみを基準に、Error / Warning、原因、対象ファイル・行を明示し、同一Rule IDをグループ化してレビューしやすくします。',
    sourceAware: 'ソースコード対応', runtimeAware: '実行時出力対応', bilingual: 'VN / JP / EN', folderTab: 'タスクフォルダ', websiteTab: 'WebサイトURL',
    chooseFolder: 'タスクフォルダの選択', folderDesc: 'ローカルでソースを解析し、依存関係・外部ライブラリ・キャッシュ・ビルド成果物を自動除外します。独自ライブラリは .jline-auditorignore で追加除外できます。', chooseFolderBtn: 'フォルダを選択', chooseZip: 'ZIPファイルを選択', or: 'または', folderPrivacy: 'フォルダ/ZIPはブラウザ内で直接解析され、APIサーバーへアップロードされません。',
    websiteTitle: 'WebサイトURL監査', websiteDesc: '複数URL、同一ドメイン内クロール、Basic Authentication付きステージングに対応します。', websiteUrl: 'WebサイトURL', websiteUrls: 'URL一覧', websiteUrlsHint: '1行につき1URL。1回最大20URL、重複は自動除外します。', maxPages: '最大ページ数', maxPagesPerUrl: '入力URLあたりの最大ページ数', crawlInternal: '入力URLから同一ドメイン内リンクもクロール', scanWebsite: 'Webサイトをスキャン', useBasicAuth: 'Basic Authenticationを使用', username: 'ユーザー名', password: 'パスワード', authHint: '認証情報はスキャン中のみ使用し、localStorageやレポートには保存しません。', batchLimitHint: '入力URL最大20件、1URLあたり20ページ、1回最大100ページです。', privateHint: 'プライベート/ローカルIPはデフォルトでブロックされます。社内ステージングではALLOW_PRIVATE_AUDIT_TARGETS=trueを使用できます。',
    analyzing: '解析中…', crawling: 'クロール・解析中…', feature1: 'コンテキスト対応ルールエンジン', feature1d: 'source/runtime、page/partial、WordPress、外部ライブラリを判別し誤検知を低減します。', feature2: 'Error / Warningを明確に分類', feature2d: 'Errorは確定できる規約違反、Warningは例外や文脈確認が必要な項目です。', feature3: '同種の指摘をグループ化', feature3d: '同一Rule IDをまとめつつ、各対象ファイルと行番号を正確に表示します。',
    newAudit: '新規監査', sourceAudit: 'ソース監査', websiteAudit: 'WEBサイト監査', guidelineStatus: '規約判定', errorLabel: 'エラー', warningLabel: '警告', groups: 'グループ', locations: '箇所', assets: 'アセット', autoDetected: '自動検出', qualityScore: '品質スコア', resources: 'リソース', findings: '件の指摘', rulesEvaluated: '件のルールを評価', exportCsv: 'CSVエクスポート', auditFindings: '監査結果・指摘事項', sourceDesc: 'チーム管理下のソースのみを規約チェックし、外部ライブラリは監査対象から除外します。', runtimeDesc: 'Web出力から合理的に検証できる項目のみ評価します。', search: 'ファイル/URL、Rule ID、内容で検索…', allSeverity: 'すべての重要度', allConfidence: 'すべての判定タイプ', all: 'すべて', noFindings: '条件に一致する指摘はありません。', fix: '修正方針', cause: '原因', guideline: '規約参照', line: '行', affectedFiles: 'ファイル', location: '対象箇所',
    thirdPartyExcluded: '監査対象外: 外部ライブラリ', selectorOwnership: '件のライブラリ所有セレクタを識別', manualChecks: 'レビュアー確認チェックリスト', manualDesc: 'デザイン、ブラウザ、業務要件、WordPress環境に依存する項目は自動減点しません。', noManual: 'このモードの手動確認項目はありません。', crawlNotes: 'クロール注記事項', batchSummary: 'Webサイト一括監査サマリー', pagesScanned: 'ページ', startUrls: '入力URL', allPages: '監査済み全ページ', pageBreakdown: 'ページ別監査結果', pageNoIssues: 'エラー/警告なし', footer: 'J-Line公式Coding Guidelinesに根拠がある項目のみ監査します。公式規約が最終基準です。',
  },
  en: {
    tagline: 'Internal Coding Quality Gate', heroEyebrow: 'J-LINE WEB MARKETING · QUALITY AUDIT', heroTitle: 'Audit tasks against the Coding Guidelines',
    heroDesc: 'Audits only against the official J-Line Coding Guidelines. Errors and warnings include a clear reason, exact file/line evidence, and grouped Rule IDs for efficient review.',
    sourceAware: 'Source-aware', runtimeAware: 'Runtime-aware', bilingual: 'VN / JP / EN', folderTab: 'Task Folder', websiteTab: 'Website URL',
    chooseFolder: 'Select task folder', folderDesc: 'Reads source locally and automatically isolates third-party libraries, cache, and generated output. Project-specific libraries can be excluded with .jline-auditorignore.', chooseFolderBtn: 'Select task folder', chooseZip: 'Select task ZIP', or: 'or', folderPrivacy: 'Folder/ZIP source is analyzed in the browser and is not uploaded to the audit API.',
    websiteTitle: 'Audit Website URLs', websiteDesc: 'Enter one or more URLs, optionally crawl internal links, and use Basic Authentication for protected staging sites.', websiteUrl: 'Website URL', websiteUrls: 'URL list', websiteUrlsHint: 'One URL per line. Up to 20 input URLs per scan; duplicates are removed automatically.', maxPages: 'Maximum pages', maxPagesPerUrl: 'Maximum pages per input URL', crawlInternal: 'Also crawl internal links from the input URLs', scanWebsite: 'Scan website', useBasicAuth: 'Use Basic Authentication', username: 'Username', password: 'Password', authHint: 'Credentials are kept only for the current scan; they are not stored in localStorage or written to reports.', batchLimitHint: 'Maximum 20 input URLs, 20 pages per URL, and 100 actual pages per scan.', privateHint: 'Private/local IPs are blocked by default. Internal staging can be enabled with ALLOW_PRIVATE_AUDIT_TARGETS=true.',
    analyzing: 'Analyzing…', crawling: 'Crawling & analyzing…', feature1: 'Context-aware rule engine', feature1d: 'Distinguishes source/runtime, page/partial, WordPress, and third-party code to reduce false positives.', feature2: 'Clear Error / Warning classification', feature2d: 'Error means a confirmed guideline violation; Warning means an exception or context must be reviewed.', feature3: 'Smart issue grouping', feature3d: 'Findings with the same Rule ID are grouped while retaining exact file and line locations.',
    newAudit: 'New audit', sourceAudit: 'SOURCE AUDIT', websiteAudit: 'WEBSITE AUDIT', guidelineStatus: 'GUIDELINE STATUS', errorLabel: 'ERROR', warningLabel: 'WARNING', groups: 'groups', locations: 'locations', assets: 'assets', autoDetected: 'auto-detected', qualityScore: 'QUALITY SCORE', resources: 'resources', findings: 'findings', rulesEvaluated: 'rules evaluated', exportCsv: 'Export CSV', auditFindings: 'Audit findings', sourceDesc: 'Rules are applied only to team-owned source; third-party libraries are excluded.', runtimeDesc: 'Runtime checks evaluate only what can be reasonably verified from website output.', search: 'Search file/URL, Rule ID, content…', allSeverity: 'All levels', allConfidence: 'All check types', all: 'All', noFindings: 'No findings match the current filters.', fix: 'How to fix', cause: 'Reason', guideline: 'Guideline', line: 'line', affectedFiles: 'files', location: 'Location',
    thirdPartyExcluded: 'Excluded from audit: third-party libraries', selectorOwnership: 'library-owned selectors recognized', manualChecks: 'Reviewer checklist', manualDesc: 'Items that depend on design, browser behavior, business context, or the WordPress environment are not automatically scored.', noManual: 'No manual checks for this mode.', crawlNotes: 'Crawl notes', batchSummary: 'Website batch summary', pagesScanned: 'pages', startUrls: 'input URLs', allPages: 'All audited pages', pageBreakdown: 'Results by page', pageNoIssues: 'No Errors/Warnings', footer: 'Only rules grounded in the official J-Line Coding Guidelines are audited. The official guideline remains the final source of truth.',
  }
} as const;
