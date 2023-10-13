"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "shoucang",
  setup(__props) {
    const selected = common_vendor.ref(false);
    const onChangeSelected = () => {
      selected.value = !selected.value;
    };
    const deletGoods = () => {
      common_vendor.index.$msgBox("删除");
    };
    const addGoods = () => {
      common_vendor.index.$msgBox("加入");
    };
    const toCart = () => {
      common_vendor.index.switchTab({
        url: "/pages/tabBar/cart/cart"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: selected.value
      }, selected.value ? {
        b: common_vendor.p({
          type: "circle-filled",
          color: "#76C071",
          size: "30"
        })
      } : {
        c: common_vendor.p({
          type: "circle",
          size: "30",
          color: "#999"
        })
      }, {
        d: common_vendor.o(($event) => onChangeSelected()),
        e: common_vendor.o(toCart),
        f: common_vendor.f(4, (item, k0, i0) => {
          return {
            a: common_vendor.o(($event) => deletGoods(), item),
            b: common_vendor.o(($event) => addGoods(), item),
            c: item
          };
        }),
        g: common_vendor.t(20),
        h: common_assets._imports_0$1,
        i: common_assets._imports_1
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-94295832"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/user/pages/shoucang/shoucang.vue"]]);
wx.createPage(MiniProgramPage);
