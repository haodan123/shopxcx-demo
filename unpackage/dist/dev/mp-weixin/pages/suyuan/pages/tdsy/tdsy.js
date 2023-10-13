"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uv_empty2 = common_vendor.resolveComponent("uv-empty");
  _easycom_uv_empty2();
}
const _easycom_uv_empty = () => "../../../../uni_modules/uv-empty/components/uv-empty/uv-empty.js";
if (!Math) {
  _easycom_uv_empty();
}
const _sfc_main = {
  __name: "tdsy",
  setup(__props) {
    const list = common_vendor.ref([1]);
    common_vendor.ref({});
    common_vendor.onLoad(({
      sydata
    }) => {
      sydata.value = JSON.parse(sydata);
    });
    const preimg = (e) => {
      common_vendor.index.previewImage({
        urls: [e],
        //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
        current: 0
        // 当前显示图片的http链接，默认是第一个
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: list.value.length <= 0
      }, list.value.length <= 0 ? {
        b: common_vendor.p({
          mode: "list",
          icon: "https://cdn.uviewui.com/uview/empty/list.png"
        })
      } : {}, {
        c: common_vendor.f(list.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.bname || "暂无"),
            b: common_vendor.t(item.addtime || "暂无"),
            c: common_vendor.t(item.name || "暂无"),
            d: common_vendor.o(($event) => preimg(item.tupian), item.id),
            e: item.id
          };
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e098e1d5"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/suyuan/pages/tdsy/tdsy.vue"]]);
wx.createPage(MiniProgramPage);
