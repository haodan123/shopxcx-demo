"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "chuanganqi",
  props: ["atmosphere", "record", "humidity", "pm", "srecord", "shumidity", "ec"],
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.srecord || 0),
        b: common_vendor.t(__props.shumidity || 0),
        c: common_vendor.t(__props.humidity || 0),
        d: common_vendor.t(__props.record || 0),
        e: common_vendor.t(__props.pm || 0),
        f: common_vendor.t(__props.ec || 0)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/components/chuanganqi/chuanganqi.vue"]]);
wx.createComponent(Component);
