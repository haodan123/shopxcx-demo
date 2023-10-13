"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "win-slideshow",
  props: {
    schoolers: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const indicatorDots = common_vendor.ref(true);
    const autoplay = common_vendor.ref(true);
    const interval = common_vendor.ref(2e3);
    const duration = common_vendor.ref(500);
    const circular = common_vendor.ref(true);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.schoolers, (item, index, i0) => {
          return {
            a: item,
            b: index
          };
        }),
        b: indicatorDots.value,
        c: autoplay.value,
        d: interval.value,
        e: duration.value,
        f: circular.value
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eb6243f2"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/components/win-slideshow/win-slideshow.vue"]]);
wx.createComponent(Component);
