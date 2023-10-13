"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const common_assets = require("../../../../../common/assets.js");
if (!Array) {
  const _component_u_steps_item = common_vendor.resolveComponent("u-steps-item");
  const _component_u_steps = common_vendor.resolveComponent("u-steps");
  (_component_u_steps_item + _component_u_steps)();
}
if (!Math) {
  (ditu2 + zhibo)();
}
const ditu2 = () => "./ditu2.js";
const zhibo = () => "./zhibo.js";
const _sfc_main = {
  __name: "syda",
  props: {
    obj: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const preimg = (imgcurrent) => {
      common_vendor.index.previewImage({
        // current: imgcurrent,
        urls: imgcurrent,
        success: function(res) {
          console.log(res);
        },
        fail: function(res) {
          console.log(res);
        },
        complete: function(res) {
          console.log(res);
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_3,
        b: common_vendor.p({
          jid: __props.obj.jid + "",
          wid: __props.obj.wid + ""
        }),
        c: common_assets._imports_3,
        d: common_vendor.f(__props.obj.zzlc, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.createtime),
            c: common_vendor.t(item.person || "暂无"),
            d: item.picture
          }, item.picture ? {
            e: common_vendor.o(($event) => preimg(item.picture), index),
            f: item.picture
          } : {}, {
            g: index,
            h: "269b7d76-2-" + i0 + ",269b7d76-1"
          });
        }),
        e: common_vendor.p({
          ["active-color"]: "#1ab888"
        }),
        f: common_vendor.p({
          current: "6",
          dot: true,
          direction: "column",
          activeColor: "#1ab888"
        }),
        g: common_assets._imports_3,
        h: common_vendor.f(__props.obj.jg, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.bzname),
            b: common_vendor.t(item.createtime),
            c: common_vendor.t(item.person || "暂无"),
            d: item.img
          }, item.img ? {
            e: common_vendor.o(($event) => preimg(item.img), index),
            f: item.img
          } : {}, {
            g: index,
            h: "269b7d76-4-" + i0 + ",269b7d76-3"
          });
        }),
        i: common_vendor.p({
          ["active-color"]: "#1ab888"
        }),
        j: common_vendor.p({
          current: "6",
          dot: true,
          direction: "column",
          activeColor: "#1ab888"
        }),
        k: common_assets._imports_3,
        l: common_assets._imports_3,
        m: common_vendor.t(0),
        n: common_assets._imports_1$1,
        o: common_vendor.t(_ctx.o0),
        p: common_assets._imports_2,
        q: common_vendor.t(0),
        r: common_assets._imports_3$1,
        s: common_vendor.t(0),
        t: common_assets._imports_4,
        v: common_vendor.t(0),
        w: common_assets._imports_5,
        x: common_vendor.t(0),
        y: common_assets._imports_6,
        z: common_vendor.t(0),
        A: common_assets._imports_7,
        B: common_vendor.t(0),
        C: common_assets._imports_8
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/suyuan/pages/spsy/components/syda.vue"]]);
wx.createComponent(Component);
