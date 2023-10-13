"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_icons2 + _easycom_uni_card2)();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_card = () => "../../../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_card)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const xyList = [{
      pageUrl: "/pages/xieyi/pages/shouhou/shouhou",
      name: "售后协议"
    }, {
      pageUrl: "/pages/xieyi/pages/zhifu/zhifu",
      name: "支付协议"
    }, {
      pageUrl: "/pages/xieyi/pages/renling/renling",
      name: "认领协议"
    }, {
      pageUrl: "/pages/xieyi/pages/renzhong/renzhong",
      name: "认种协议"
    }, {
      pageUrl: "/pages/xieyi/pages/renyang/renyang",
      name: "认养协议"
    }];
    const toUrl = (url) => {
      common_vendor.index.navigateTo({
        url
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(xyList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: "5ca1004a-1-" + i0 + "," + ("5ca1004a-0-" + i0),
            c: common_vendor.o(($event) => toUrl(item.pageUrl), index),
            d: index,
            e: "5ca1004a-0-" + i0
          };
        }),
        b: common_vendor.p({
          type: "arrow-right",
          color: "red",
          size: "20"
        }),
        c: common_vendor.p({
          margin: "10px 0",
          padding: "10px 0"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5ca1004a"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/xieyi/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
