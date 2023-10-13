"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_u_button = common_vendor.resolveComponent("u-button");
  const _easycom_uv_empty2 = common_vendor.resolveComponent("uv-empty");
  (_component_u_button + _easycom_uv_empty2)();
}
const _easycom_uv_empty = () => "../../uni_modules/uv-empty/components/uv-empty/uv-empty.js";
if (!Math) {
  _easycom_uv_empty();
}
const _sfc_main = {
  __name: "cards",
  props: {
    List: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    common_vendor.onShow(() => {
    });
    const toUse = () => {
    };
    const toUsehqy = (item) => {
      this.$emit("toUse", item);
    };
    const linqu = async (id) => {
      let data = {
        "yid": common_vendor.index.getStorageSync("userInfo").id,
        //用户id
        "hid": id
        //优惠券id
      };
      this.$emit("linqu", data);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(__props.List, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.ymoney || "20"),
            b: item.conditions == "0"
          }, item.conditions == "0" ? {
            c: common_vendor.t(item.conditions || "无门槛")
          } : {
            d: common_vendor.t(item.conditions)
          }, {
            e: common_vendor.t(item.yname || "暂无"),
            f: common_vendor.t(item.addtime),
            g: common_vendor.t(item.validity || "2023-0202~2024-02-02"),
            h: item.ytype == "1"
          }, item.ytype == "1" ? {
            i: common_vendor.t("土地优惠")
          } : {
            j: common_vendor.t("农资优惠")
          }, {
            k: item.status == "1"
          }, item.status == "1" ? {
            l: common_vendor.o(toUse, index),
            m: "482a1aac-0-" + i0,
            n: common_vendor.p({
              type: "success",
              text: "立即使用"
            })
          } : {}, {
            o: item.status == "5"
          }, item.status == "5" ? {
            p: common_vendor.o(($event) => toUsehqy(item), index),
            q: "482a1aac-1-" + i0,
            r: common_vendor.p({
              type: "success",
              text: "立即使用"
            })
          } : {}, {
            s: item.status == "6"
          }, item.status == "6" ? {
            t: "482a1aac-2-" + i0,
            v: common_vendor.p({
              disabled: true,
              type: "success",
              text: "不可使用"
            })
          } : {}, {
            w: item.status == "2"
          }, item.status == "2" ? {
            x: "482a1aac-3-" + i0,
            y: common_vendor.p({
              disabled: true,
              type: "success",
              text: "已使用"
            })
          } : {}, {
            z: item.status == "3"
          }, item.status == "3" ? {
            A: "482a1aac-4-" + i0,
            B: common_vendor.p({
              disabled: true,
              type: "success",
              text: "已失效"
            })
          } : {}, {
            C: item.status == "0"
          }, item.status == "0" ? {
            D: common_vendor.o(($event) => linqu(item.id), index),
            E: "482a1aac-5-" + i0,
            F: common_vendor.p({
              type: "success",
              text: "立即领取"
            })
          } : {}, {
            G: item.status == "4"
          }, item.status == "4" ? {
            H: "482a1aac-6-" + i0,
            I: common_vendor.p({
              disabled: true,
              type: "success",
              text: "已领取"
            })
          } : {}, {
            J: index
          });
        }),
        b: __props.List.length == 0
      }, __props.List.length == 0 ? {
        c: common_vendor.p({
          mode: "list",
          icon: "https://cdn.uviewui.com/uview/empty/list.png"
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/components/cards/cards.vue"]]);
wx.createComponent(Component);
