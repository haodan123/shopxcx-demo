"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  cards();
}
const cards = () => "../cards/cards.js";
const _sfc_main = {
  __name: "coupon",
  props: {
    money: {
      type: Number | String,
      defined: 0
    }
  },
  emits: ["useCoupon"],
  setup(__props, { emit }) {
    const toUseyh = (item) => {
      emit("useCoupon", item);
    };
    common_vendor.onShow(() => {
    });
    const cardsList = common_vendor.ref([{}, {}]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toUseyh),
        b: common_vendor.p({
          List: cardsList.value
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fa1507a0"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/components/coupon/coupon.vue"]]);
wx.createComponent(Component);
