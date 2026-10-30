import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"5-1. 納品方法に関して・納品の仕方","description":"","frontmatter":{},"headers":[],"relativePath":"05-delivery/5-1-delivery-overview.md","filePath":"05-delivery/5-1-delivery-overview.md"}');
const _sfc_main = { name: "05-delivery/5-1-delivery-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_5-1-納品方法に関して・納品の仕方" tabindex="-1">5-1. 納品方法に関して・納品の仕方 <a class="header-anchor" href="#_5-1-納品方法に関して・納品の仕方" aria-label="Permalink to &quot;5-1. 納品方法に関して・納品の仕方&quot;">​</a></h1><h2 id="納品方法に関して" tabindex="-1">納品方法に関して <a class="header-anchor" href="#納品方法に関して" aria-label="Permalink to &quot;納品方法に関して&quot;">​</a></h2><p>納品方法は主に2通りになる。 データのみを納品する「データ納品」 直接クライアントのサーバーにファイルをアップする「本番公開（公開作業）」 それぞれ納品方法が異なるため、予めどちらの方法で納品するのかをディレクターに確認をしておくこと。</p><h2 id="納品の仕方" tabindex="-1">納品の仕方 <a class="header-anchor" href="#納品の仕方" aria-label="Permalink to &quot;納品の仕方&quot;">​</a></h2><ul><li>データ納品・本番公開共に、納品する際は不要なファイルは含まないこと。</li><li>公開作業の際は<a href="https://docs.google.com/spreadsheets/d/1_iD95RWSG4_AlToFlA80eeN0c0eMDW0rgP1ahh_aWuo/edit?gid=0#gid=0" target="_blank" rel="noreferrer">「チェックリスト」</a>を参考に確認しながら作業を進めること</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("05-delivery/5-1-delivery-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _51DeliveryOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _51DeliveryOverview as default
};
