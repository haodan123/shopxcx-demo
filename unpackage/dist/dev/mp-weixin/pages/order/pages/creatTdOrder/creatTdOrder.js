"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_countdown2 = common_vendor.resolveComponent("uni-countdown");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_coupon2 = common_vendor.resolveComponent("coupon");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_countdown2 + _easycom_uni_icons2 + _easycom_coupon2 + _easycom_uni_popup2)();
}
const _easycom_uni_countdown = () => "../../../../uni_modules/uni-countdown/components/uni-countdown/uni-countdown.js";
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_coupon = () => "../../../../components/coupon/coupon.js";
const _easycom_uni_popup = () => "../../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_countdown + _easycom_uni_icons + _easycom_coupon + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "creatTdOrder",
  setup(__props) {
    const popup = common_vendor.ref();
    const popupType = common_vendor.ref("bottom");
    const popupName = common_vendor.ref("coupon");
    const seconds = common_vendor.ref();
    const xieyiValue = common_vendor.ref(false);
    const addressData = common_vendor.ref({
      name: "",
      mobile: "",
      addressName: "",
      address: "",
      moren: 1
    });
    const couponData = common_vendor.ref({});
    common_vendor.onShow(() => {
      common_vendor.index.$once("SELECT_ADDRESS", (e) => {
        addressData.value = e.addressInfo;
      });
    });
    common_vendor.onLoad(() => {
      let datetime = /* @__PURE__ */ new Date();
      let date = /* @__PURE__ */ new Date();
      seconds.value = (datetime.getMinutes() + 15) * 60 + datetime.getSeconds() - (date.getMinutes() * 60 + date.getSeconds());
    });
    const pay = () => {
    };
    const huodaoPay = () => {
    };
    const xieyiChange = () => {
      xieyiValue.value = !xieyiValue.value;
    };
    const toXieyi = () => {
      common_vendor.index.navigateTo({
        url: "/pages/xieyi/pages/zhifu/zhifu"
      });
    };
    const closePopup = () => {
      popup.value.close();
    };
    const useCoupon = (item) => {
      closePopup();
    };
    const toYouhui = () => {
      popup.value.open();
      popupType.value = "bottom";
      popupName.value = "coupon";
    };
    const toAddress = () => {
      common_vendor.index.navigateTo({
        url: `/pages/user/pages/address/address?source=${1}`
      });
    };
    const timeOut = () => {
    };
    const paidamount = common_vendor.computed(() => {
      console.log(price);
      let price = 100;
      if (couponData.value.ymoney) {
        let paidamount2 = Number(price) - Number(couponData.value.ymoney);
        if (paidamount2 <= 0) {
          paidamount2 = 0.01;
        }
        return common_vendor.index.$toFixed(paidamount2);
      } else {
        return common_vendor.index.$toFixed(price);
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(timeOut),
        b: common_vendor.p({
          ["show-day"]: false,
          showh: false,
          second: seconds.value,
          ["show-colon"]: false
        }),
        c: common_vendor.t(addressData.value.name ? "更换地址" : "选择地址"),
        d: common_vendor.p({
          type: "right",
          size: "18",
          color: "#999"
        }),
        e: common_vendor.o(toAddress),
        f: addressData.value.name
      }, addressData.value.name ? {
        g: common_vendor.p({
          type: "phone",
          size: "24",
          color: "#51AA38"
        }),
        h: common_vendor.t(addressData.value.name),
        i: common_vendor.t(addressData.value.mobile),
        j: common_vendor.p({
          type: "location",
          size: "24",
          color: "#51AA38"
        }),
        k: common_vendor.t(addressData.value.address),
        l: common_vendor.t(addressData.value.addressName)
      } : {}, {}, {
        n: common_vendor.p({
          type: "right",
          size: "18",
          color: "#999"
        }),
        o: common_vendor.o(toYouhui),
        p: common_vendor.t(common_vendor.unref(paidamount)),
        q: xieyiValue.value,
        r: common_vendor.o(xieyiChange),
        s: common_vendor.o(toXieyi),
        t: common_vendor.o(pay),
        v: common_vendor.o(huodaoPay),
        w: popupName.value == "coupon"
      }, popupName.value == "coupon" ? {
        x: common_vendor.o(useCoupon)
      } : {}, {
        y: common_vendor.sr(popup, "95981a0c-5", {
          "k": "popup"
        }),
        z: common_vendor.p({
          type: popupType.value,
          ["background-color"]: "#fff"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-95981a0c"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/order/pages/creatTdOrder/creatTdOrder.vue"]]);
wx.createPage(MiniProgramPage);
