import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"5-2. データ納品・差分納品","description":"","frontmatter":{},"headers":[],"relativePath":"05-delivery/5-2-data-delivery.md","filePath":"05-delivery/5-2-data-delivery.md"}');
const _sfc_main = { name: "05-delivery/5-2-data-delivery.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_5-2-データ納品・差分納品" tabindex="-1">5-2. データ納品・差分納品 <a class="header-anchor" href="#_5-2-データ納品・差分納品" aria-label="Permalink to &quot;5-2. データ納品・差分納品&quot;">​</a></h1><h2 id="データ納品" tabindex="-1">データ納品 <a class="header-anchor" href="#データ納品" aria-label="Permalink to &quot;データ納品&quot;">​</a></h2><ul><li>いかなる時も納品データはJLのdropboxにも格納すること。</li><li>不要なファイルは削除したうえで <ol><li>案件名のフォルダ＞「コーディングデータ」フォルダを作成</li><li>作成したコーディングデータフォルダの中に指定のディレクトリ通りにファイルを入れる</li><li>納品データの命名は以下のように設定 例：ver01-2026-04-01.zip 4.納品後に修正を行った場合は「ver02-日付」とし格納をすること。</li></ol></li><li>ファイルはZip圧縮し、dropboxの共有URLを使って納品する。 　ダウンロード期間は1週間、パスワードをかけて共有すること。</li></ul><p><strong>差分納品の場合</strong></p><ul><li>修正作業などで、作業したファイルのみ納品する場合は下記手順を追加 <ol><li>修正前のデータのバックアップをとっておくこと</li><li>納品までに時差が生じる場合もあるため、どのファイルを修正したか、imgフォルダやcssファイルまで明確に記録しておくこと</li><li>修正後と修正前のフォルダを<a href="https://qiita.com/frozencatpisces/items/8f998720de8f2aaa7e37" target="_blank" rel="noreferrer">チェックツール</a>にかけ、納品漏れが無いように確認をする</li></ol></li></ul><p><strong>※ テンプレートの自動化機能を使用した納品データの準備（.github/workflows/release.yml）：</strong> 手作業での抽出や外部ツール（WinMergeなど）によるミスを防ぐため、現在のテンプレートは**差分ファイルの自動抽出（Auto Diff Extraction）**を備えた強力なリリース機能を搭載しています。</p><ol><li>修正を全てコミットした後、新しいタグを作成し（例：<code>git tag v1.0.1</code>）、GitHubにプッシュします（<code>git push origin v1.0.1</code>）。</li><li>GitHub Actionsが自動的にビルドを実行し、不要なファイル（<code>node_modules</code>や<code>.scss</code>など）を除外します。</li><li><strong>自動抽出：</strong> システムが自動的に前回のRelease版をダウンロードし、新しいビルドと比較して、変更・追加されたファイルのみを正確に抽出して自動でZIP化します。</li><li>開発者またはPMは、GitHubの <strong>Releases</strong> ページにアクセスし、自動生成された以下の2つの <code>.zip</code> ファイルをダウンロードして納品するだけです。 <ul><li>📦 <strong>フルバージョン：</strong> <code>{プロジェクト名}_{tag_name}.zip</code>（全てのクリーンなデータ）</li><li>📦 <strong>差分データ：</strong> <code>{プロジェクト名}_diff_data_{tag_name}.zip</code>（前回の納品から変更・追加されたファイルのみ。漏れのリスクはゼロです）</li></ul></li></ol><blockquote><p>⚠️ <strong>顧客からデータを受け取った際の重要注意事項：</strong> GitHub Actionsが差分ファイルを比較・抽出するには、基準となるベースラインが必要です。そのため、顧客から既存のソースコードを受け取り、初めてGitにプッシュした直後に、<strong>コードの修正を始める前に必ずタグ（例：<code>v1.0.0</code>）を作成し、GitHubにプッシュしてください。</strong> 修正後に初めてタグを作成した場合、システムは比較対象の古いバージョンを見つけられず、差分データ（Diff）を生成できません。</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("05-delivery/5-2-data-delivery.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _52DataDelivery = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _52DataDelivery as default
};
