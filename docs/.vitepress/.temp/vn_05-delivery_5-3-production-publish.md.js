import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"5-3. Công khai môi trường production","description":"","frontmatter":{},"headers":[],"relativePath":"vn/05-delivery/5-3-production-publish.md","filePath":"vn/05-delivery/5-3-production-publish.md"}');
const _sfc_main = { name: "vn/05-delivery/5-3-production-publish.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_5-3-cong-khai-moi-truong-production" tabindex="-1">5-3. Công khai môi trường production <a class="header-anchor" href="#_5-3-cong-khai-moi-truong-production" aria-label="Permalink to &quot;5-3. Công khai môi trường production&quot;">​</a></h1><h2 id="cong-khai-moi-truong-production-cong-viec-cong-khai" tabindex="-1">Công khai môi trường production（công việc công khai） <a class="header-anchor" href="#cong-khai-moi-truong-production-cong-viec-cong-khai" aria-label="Permalink to &quot;Công khai môi trường production（công việc công khai）&quot;">​</a></h2><ul><li>Khi có task phát sinh, cần xác nhận các thông tin sau: thông tin FTP của khách hàng, kiểm tra kết nối, thư mục upload, xác nhận với director xem có xóa data cũ trên server hay không</li><li>Trường hợp site tĩnh, Tạo folder [old] trên server và di chuyển data cũ vào đó. Đồng thời, backup data và tạo folder [old] trên Dropbox để lưu trữ</li><li>Sau khi upload, dùng checklist để kiểm tra xem site có vấn đề gì không <a href="https://docs.google.com/spreadsheets/d/1_iD95RWSG4_AlToFlA80eeN0c0eMDW0rgP1ahh_aWuo/edit?gid=0#gid=0" target="_blank" rel="noreferrer">「check list」</a></li></ul><p><strong>Trường hợp WordPress</strong></p><ul><li>Backup WP cũ, bao gồm data <a href="https://ja.wordpress.org/plugins/wpvivid-backuprestore/" target="_blank" rel="noreferrer">「WPvivid」</a> và file PHP, rồi lưu vào dropbox <ul><li>※Khi xác nhận với khách hàng xong, có thể xóa data cũ trên server</li></ul></li></ul><p><strong>Khi có thể publish trực tiếp trên server khách hàng</strong></p><ol><li>Thay đổi URL site và công khai. Di chuyển thư mục wp từ thư mục con lên root directory → <a href="https://www.cloud9works.net/web/how-to-change-wordpress-directory/" target="_blank" rel="noreferrer">site tham khảo</a></li></ol><p><strong>Khi chuyển từ test server của JL</strong></p><ol><li>Cài WordPress trên server, dùng 「WPvivid」để migrate</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/05-delivery/5-3-production-publish.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _53ProductionPublish = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _53ProductionPublish as default
};
