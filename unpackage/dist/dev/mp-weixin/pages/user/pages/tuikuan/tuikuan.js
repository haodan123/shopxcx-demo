"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  _easycom_uni_data_checkbox2();
}
const _easycom_uni_data_checkbox = () => "../../../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
if (!Math) {
  _easycom_uni_data_checkbox();
}
const _sfc_main = {
  __name: "tuikuan",
  setup(__props) {
    const moy = common_vendor.ref();
    const fromdata = common_vendor.ref({
      reason: null,
      orderNo: null
    });
    const radio = common_vendor.ref(null);
    const range = common_vendor.ref([{
      "value": 0,
      "text": "不想要了"
    }, {
      "value": 1,
      "text": "拍错/拍多了"
    }, {
      "value": 2,
      "text": "地址信息填写错误"
    }, {
      "value": 3,
      "text": "少用/没用/错用优惠"
    }, {
      "value": 4,
      "text": "其他"
    }]);
    common_vendor.onLoad((opt) => {
      moy.value = opt.moy;
      fromdata.value.orderNo = opt.orderno;
    });
    const change = (e) => {
      console.log(e, radio.value);
    };
    const tuikuan = async () => {
      if (!fromdata.value.reason) {
        common_vendor.index.showToast({
          title: "请填写退款原因",
          icon: "none"
        });
        return;
      }
      const data = {
        "orderNo": fromdata.value.orderNo,
        //订单编号
        "reason": fromdata.value.reason
        //退款原因
      };
      try {
        await common_vendor.index.$api.tuikuan(data);
        common_vendor.index.showToast({
          title: "申请退款成功"
        });
        setTimeout(() => {
          common_vendor.index.navigateBack({
            delta: 1
          });
        }, 800);
      } catch (e) {
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(moy.value || ""),
        b: common_vendor.o(change),
        c: common_vendor.o(($event) => radio.value = $event),
        d: common_vendor.p({
          selectedColor: "#fc9a39",
          selectedTextColor: "#333",
          icon: "left",
          mode: "list",
          wrap: true,
          localdata: range.value,
          modelValue: radio.value
        }),
        e: radio.value == 4
      }, radio.value == 4 ? {
        f: fromdata.value.reason,
        g: common_vendor.o(($event) => fromdata.value.reason = $event.detail.value)
      } : {}, {
        h: common_vendor.o(tuikuan)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/user/pages/tuikuan/tuikuan.vue"]]);
wx.createPage(MiniProgramPage);
