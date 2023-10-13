"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "goodNav",
  props: {
    text: {
      type: String,
      default: "立即认领"
    },
    phone: {
      type: Number,
      default: 13333333
    },
    type: {
      type: String,
      //sp代表商品电商    ny代表农业电商
      default: ""
    }
  },
  emits: ["buy", "cart"],
  setup(__props, { emit }) {
    const btmpd = common_vendor.ref(0);
    common_vendor.onShow(() => {
    });
    common_vendor.onMounted(() => {
      btmpd.value = common_vendor.index.$safeBtm;
    });
    const toNav = (index) => {
      common_vendor.index.switchTab({
        url: "/pages/tabBar/home/home"
      });
    };
    const isLike = () => {
    };
    const cart = () => {
      emit("cart");
    };
    const buy = () => {
      console.log("点击");
      emit("buy", "");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.type == "ny"
      }, __props.type == "ny" ? {
        b: common_vendor.p({
          type: "home",
          size: "20",
          color: "#999"
        }),
        c: common_vendor.o(toNav)
      } : {}, {
        d: __props.type == "sp"
      }, __props.type == "sp" ? common_vendor.e({
        f: common_vendor.p({
          type: "star",
          size: "20"
        })
      }, {
        g: common_vendor.o(isLike)
      }) : {}, {
        h: common_vendor.p({
          type: "headphones",
          size: "20",
          color: "#999"
        }),
        i: __props.type == "sp"
      }, __props.type == "sp" ? {
        j: common_vendor.t("加入购物车"),
        k: common_vendor.o(cart)
      } : {}, {
        l: __props.type == "sp"
      }, __props.type == "sp" ? {
        m: common_vendor.t("立即购买"),
        n: common_vendor.o(buy)
      } : {}, {
        o: __props.type == "ny"
      }, __props.type == "ny" ? {
        p: common_vendor.t(__props.text || ""),
        q: common_vendor.o(buy)
      } : {}, {
        r: btmpd.value + "px"
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/components/goodNav/goodNav.vue"]]);
wx.createComponent(Component);
