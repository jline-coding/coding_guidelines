import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"5-4. バックアップに関して","description":"","frontmatter":{},"headers":[],"relativePath":"05-delivery/5-4-backup.md","filePath":"05-delivery/5-4-backup.md"}');
const _sfc_main = { name: "05-delivery/5-4-backup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_5-4-バックアップに関して" tabindex="-1">5-4. バックアップに関して <a class="header-anchor" href="#_5-4-バックアップに関して" aria-label="Permalink to &quot;5-4. バックアップに関して&quot;">​</a></h1><ul><li>テストアップ時のデータと公開後（納品後）のデータの2つをとり、dropboxに保管する</li><li>WordPressの「WPvivid」データも納品時のものを保管しておくこと</li><li>納品後、都度修正が入ればdropboxに対応後のデータを格納すること（静的であれば差分データのみでよい）</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("05-delivery/5-4-backup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _54Backup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _54Backup as default
};
