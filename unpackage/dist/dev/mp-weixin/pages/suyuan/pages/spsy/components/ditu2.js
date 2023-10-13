"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  __name: "ditu2",
  props: {
    jid: {
      type: String,
      default: ""
    },
    wid: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const maps = common_vendor.ref("1");
    common_vendor.ref([]);
    const latitude = common_vendor.ref(30.41);
    const longitude = common_vendor.ref(104.55);
    const covers = common_vendor.ref([]);
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: maps.value,
        b: latitude.value,
        c: longitude.value,
        d: covers.value
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/suyuan/pages/spsy/components/ditu2.vue"]]);
wx.createComponent(Component);
