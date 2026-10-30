import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"5-1. Phương pháp giao hàng & Cách thức giao hàng","description":"","frontmatter":{},"headers":[],"relativePath":"vn/05-delivery/5-1-delivery-overview.md","filePath":"vn/05-delivery/5-1-delivery-overview.md"}');
const _sfc_main = { name: "vn/05-delivery/5-1-delivery-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_5-1-phuong-phap-giao-hang-cach-thuc-giao-hang" tabindex="-1">5-1. Phương pháp giao hàng &amp; Cách thức giao hàng <a class="header-anchor" href="#_5-1-phuong-phap-giao-hang-cach-thuc-giao-hang" aria-label="Permalink to &quot;5-1. Phương pháp giao hàng &amp; Cách thức giao hàng&quot;">​</a></h1><h2 id="lien-quan-đen-phuong-phap-giao-hang" tabindex="-1">Liên quan đến phương pháp giao hàng <a class="header-anchor" href="#lien-quan-đen-phuong-phap-giao-hang" aria-label="Permalink to &quot;Liên quan đến phương pháp giao hàng&quot;">​</a></h2><p>Có 2 cách giao hàng chính Chỉ bàn giao file data Upload trực tiếp file lên server của khách hàng (công khai lên production（công việc công khai）) Vì mỗi cách bàn giao có quy trình khác nhau, nên cần xác nhận trước với director xem sẽ bàn giao theo cách nào</p><h2 id="cach-thuc-giao-hang" tabindex="-1">Cách thức giao hàng <a class="header-anchor" href="#cach-thuc-giao-hang" aria-label="Permalink to &quot;Cách thức giao hàng&quot;">​</a></h2><ul><li>Dù là bàn giao data hay công khai lên server, khi bàn giao không được bao gồm các file không cần thiết.</li><li>Khi thực hiện công khai lên server, cần tham khảo <a href="https://docs.google.com/spreadsheets/d/1_iD95RWSG4_AlToFlA80eeN0c0eMDW0rgP1ahh_aWuo/edit?gid=0#gid=0" target="_blank" rel="noreferrer">「checklist」</a> và kiểm tra từng bước trong khi làm</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/05-delivery/5-1-delivery-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _51DeliveryOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _51DeliveryOverview as default
};
