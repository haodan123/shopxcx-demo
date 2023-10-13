"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  __name: "zhibo",
  props: {
    zhibo: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    common_vendor.ref();
    common_vendor.onMounted(() => {
      console.log(props.zhibo);
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e9929402"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/suyuan/pages/spsy/components/zhibo.vue"]]);
wx.createComponent(Component);
