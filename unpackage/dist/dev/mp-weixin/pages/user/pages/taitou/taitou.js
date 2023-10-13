"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_uni_tag2 + _easycom_uni_icons2 + _easycom_uv_button2)();
}
const _easycom_uni_tag = () => "../../../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_button = () => "../../../../uni_modules/uv-button/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uni_tag + _easycom_uni_icons + _easycom_uv_button)();
}
const _sfc_main = {
  __name: "taitou",
  setup(__props) {
    const goTtAdd = (item) => {
      common_vendor.index.navigateTo({
        url: `/pages/user/pages/taitouAdd/taitouAdd?id=${item.id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(2, (item, k0, i0) => {
          return common_vendor.e({
            a: "8b7c4045-0-" + i0,
            b: common_vendor.p({
              inverted: true,
              text: "公司",
              type: "success"
            })
          }, {
            e: common_vendor.o(($event) => goTtAdd(item), item),
            f: "8b7c4045-2-" + i0,
            g: item
          });
        }),
        b: common_vendor.p({
          ["custom-prefix"]: "ceshi",
          type: "icon-xiugai",
          size: "25"
        }),
        c: common_vendor.o(goTtAdd),
        d: common_vendor.p({
          type: "success",
          text: "新增抬头"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8b7c4045"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/user/pages/taitou/taitou.vue"]]);
wx.createPage(MiniProgramPage);
