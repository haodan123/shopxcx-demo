"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "orderDetail",
  setup(__props) {
    const toSuyuan = (item) => {
      {
        common_vendor.index.navigateTo({
          url: "/pages/suyuan/pages/spsy/spsy"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => toSuyuan()),
        b: common_vendor.p({
          type: "phone",
          size: "24",
          color: "#51AA38"
        }),
        c: common_vendor.t("13333333333"),
        d: common_vendor.p({
          type: "location",
          size: "24",
          color: "#51AA38"
        }),
        e: common_vendor.t("地址")
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5a785172"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/order/pages/orderDetail/orderDetail.vue"]]);
wx.createPage(MiniProgramPage);
