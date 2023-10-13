"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_transition2 = common_vendor.resolveComponent("uni-transition");
  (_easycom_uni_icons2 + _easycom_uni_transition2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_transition = () => "../../uni_modules/uni-transition/components/uni-transition/uni-transition.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_transition)();
}
const _sfc_main = {
  __name: "typePopup",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    active: {
      // type: Number | String,
      default: 0
    }
  },
  emits: ["close", "useType"],
  setup(__props, { emit }) {
    const props = __props;
    common_vendor.onShow(() => {
      console.log("进入");
    });
    const tapType = (item, index) => {
      emit("useType", index);
    };
    const moveHandle = () => {
      return false;
    };
    common_vendor.watch(() => props.show, (new1) => {
      console.log(222, new1);
    });
    const close = () => {
      emit("close");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(10, (item, index, i0) => {
          return {
            a: index == __props.active ? 1 : "",
            b: index,
            c: common_vendor.o(($event) => tapType(item, index), index)
          };
        }),
        b: common_vendor.p({
          type: "top",
          size: "15"
        }),
        c: common_vendor.o(close),
        d: common_vendor.o(moveHandle),
        e: common_vendor.n(!__props.show ? "masknone" : ""),
        f: common_vendor.o(close),
        g: common_vendor.o(moveHandle),
        h: common_vendor.p({
          ["custom-class"]: "popupBox",
          ["mode-class"]: ["fade", "slide-top"],
          duration: 300,
          show: __props.show
        }),
        i: common_vendor.o(moveHandle)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7835efe3"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/components/typePopup/typePopup.vue"]]);
wx.createComponent(Component);
