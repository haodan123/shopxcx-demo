"use strict";
const uni_modules_uvUiTools_libs_mixin_mpMixin = require("../../../uv-ui-tools/libs/mixin/mpMixin.js");
const uni_modules_uvUiTools_libs_mixin_mixin = require("../../../uv-ui-tools/libs/mixin/mixin.js");
const uni_modules_uvScrollList_components_uvScrollList_props = require("./props.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../../uv-ui-tools/libs/function/index.js");
require("../../../uv-ui-tools/libs/function/test.js");
require("../../../uv-ui-tools/libs/function/digit.js");
const block0 = (Component2) => {
  if (!Component2.wxsCallMethods) {
    Component2.wxsCallMethods = [];
  }
  Component2.wxsCallMethods.push("scrollEvent");
};
const _sfc_main = {
  name: "uv-scroll-list",
  mixins: [uni_modules_uvUiTools_libs_mixin_mpMixin.mpMixin, uni_modules_uvUiTools_libs_mixin_mixin.mixin, uni_modules_uvScrollList_components_uvScrollList_props.props],
  data() {
    return {
      scrollInfo: {
        scrollLeft: 0,
        scrollWidth: 0
      },
      scrollWidth: 0
    };
  },
  computed: {
    // 指示器为线型的样式
    barStyle() {
      const style = {};
      style.width = this.$uv.addUnit(this.indicatorBarWidth);
      style.backgroundColor = this.indicatorActiveColor;
      return style;
    },
    lineStyle() {
      const style = {};
      style.width = this.$uv.addUnit(this.indicatorWidth);
      style.backgroundColor = this.indicatorColor;
      return style;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getComponentWidth();
    },
    scrollEvent(status) {
      this.$emit(status);
    },
    // 获取组件的宽度
    async getComponentWidth() {
      await this.$uv.sleep(30);
      this.$uvGetRect(".uv-scroll-list").then((size) => {
        this.scrollWidth = size.width;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.scrollWidth,
    b: _ctx.$uv.getPx(_ctx.indicatorBarWidth),
    c: _ctx.$uv.getPx(_ctx.indicatorWidth),
    d: _ctx.indicator
  }, _ctx.indicator ? {
    e: common_vendor.s($options.barStyle),
    f: common_vendor.s($options.lineStyle),
    g: common_vendor.s(_ctx.$uv.addStyle(_ctx.indicatorStyle))
  } : {});
}
if (typeof block0 === "function")
  block0(_sfc_main);
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-145f8032"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/uni_modules/uv-scroll-list/components/uv-scroll-list/uv-scroll-list.vue"]]);
wx.createComponent(Component);
