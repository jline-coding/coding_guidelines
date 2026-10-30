import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"11-3. コード・画像類テンプレート","description":"","frontmatter":{},"headers":[],"relativePath":"11-launch-and-templates/11-3-code-and-dummy-templates.md","filePath":"11-launch-and-templates/11-3-code-and-dummy-templates.md"}');
const _sfc_main = { name: "11-launch-and-templates/11-3-code-and-dummy-templates.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_11-3-コード・画像類テンプレート" tabindex="-1">11-3. コード・画像類テンプレート <a class="header-anchor" href="#_11-3-コード・画像類テンプレート" aria-label="Permalink to &quot;11-3. コード・画像類テンプレート&quot;">​</a></h1><h3 id="コーディングテンプレート" tabindex="-1">コーディングテンプレート <a class="header-anchor" href="#コーディングテンプレート" aria-label="Permalink to &quot;コーディングテンプレート&quot;">​</a></h3><ul><li><a href="https://github.com/jline-coding/TEMPLATE_HTML/archive/refs/heads/master.zip" target="_blank" rel="noreferrer">HTMLデータ（zip）</a></li><li><a href="https://github.com/jline-coding/TEMPLATE_WP/archive/refs/heads/master.zip" target="_blank" rel="noreferrer">WordPressデータ（zip）</a></li><li>WordPressのカスタマイズテーマのphpファイル</li><li>テンプレート内には案件によっては不要な内容もあるので臨機応変に不要なものは消してください</li></ul><h3 id="ダミーファイル類" tabindex="-1">ダミーファイル類 <a class="header-anchor" href="#ダミーファイル類" aria-label="Permalink to &quot;ダミーファイル類&quot;">​</a></h3><ul><li>フォームで添付機能の送信テストの際に使用するダミーデータ</li></ul><div class="table-wrap"><table tabindex="0"><thead><tr><th>ファイル形式</th><th>リンク</th></tr></thead><tbody><tr><td>Excel</td><td><a href="https://www.jlweb.jp/coding/assets/dl/dummy.xlsx" target="_blank" rel="noreferrer">ダミーExcel</a></td></tr><tr><td>PDF</td><td><a href="https://www.jlweb.jp/coding/assets/dl/dummy.pdf" target="_blank" rel="noreferrer">ダミーPDF</a></td></tr><tr><td>Word</td><td><a href="https://www.jlweb.jp/coding/assets/dl/dummy.docx" target="_blank" rel="noreferrer">ダミーDocx</a></td></tr></tbody></table></div><h3 id="ダミー画像" tabindex="-1">ダミー画像 <a class="header-anchor" href="#ダミー画像" aria-label="Permalink to &quot;ダミー画像&quot;">​</a></h3><ul><li><p>WPのアイキャッチなどで画像が設定されていない場合に表示するダミー画像</p></li><li><p><a href="https://www.jlweb.jp/coding/assets/dl/no-image.jpg" target="_blank" rel="noreferrer">ダミー画像（no-image.jpg）</a></p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("11-launch-and-templates/11-3-code-and-dummy-templates.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _113CodeAndDummyTemplates = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _113CodeAndDummyTemplates as default
};
