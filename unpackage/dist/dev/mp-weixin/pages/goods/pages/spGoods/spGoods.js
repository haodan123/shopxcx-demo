"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_win_slideshow2 = common_vendor.resolveComponent("win-slideshow");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_bctos_rich_text2 = common_vendor.resolveComponent("bctos-rich-text");
  (_easycom_win_slideshow2 + _easycom_uni_number_box2 + _easycom_uni_card2 + _easycom_bctos_rich_text2)();
}
const _easycom_win_slideshow = () => "../../../../components/win-slideshow/win-slideshow.js";
const _easycom_uni_number_box = () => "../../../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_card = () => "../../../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_bctos_rich_text = () => "../../../../components/bctos-rich-text/bctos-rich-text.js";
if (!Math) {
  (_easycom_win_slideshow + _easycom_uni_number_box + _easycom_uni_card + _easycom_bctos_rich_text + goodNav)();
}
const goodNav = () => "../../../../components/goodNav/goodNav.js";
const _sfc_main = {
  __name: "spGoods",
  setup(__props) {
    const bannerList = common_vendor.ref(["/static/gg.png"]);
    const shopid = common_vendor.ref("");
    const shopData = common_vendor.ref({});
    const count = common_vendor.ref(1);
    common_vendor.onLoad(({
      id
    }) => {
      shopid.value = id;
    });
    common_vendor.onShow(() => {
      getData();
    });
    const getData = async () => {
      ({
        id: shopid.value
      });
    };
    const toSpSy = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/suyuan/pages/spsy/spsy?id=${1}`
      });
    };
    const cart = () => {
      console.log("购物车");
      common_vendor.index.$msgBox("加入购物车成功");
    };
    const buy = () => {
      console.log("sssss");
      console.log("购买");
      shopData.value.count = count.value;
      shopData.value.detailed = "";
      common_vendor.index.navigateTo({
        url: `/pages/order/pages/creatSpOrder/creatSpOrder?shop=${JSON.stringify(shopData.value)}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          schoolers: bannerList.value
        }),
        b: common_vendor.t(shopData.value.danjia || "暂无"),
        c: common_vendor.t(shopData.value.danwei || "暂无"),
        d: common_vendor.t(shopData.value.sname || "暂无"),
        e: common_vendor.t(shopData.value.subtitle || "暂无"),
        f: common_vendor.t(100),
        g: common_vendor.o(($event) => count.value = $event),
        h: common_vendor.p({
          integer: false,
          min: 1,
          max: 100,
          modelValue: count.value
        }),
        i: common_vendor.o(($event) => toSpSy()),
        j: common_vendor.p({
          margin: "10px 0",
          padding: "10px 0"
        }),
        k: common_vendor.p({
          nodes: shopData.value.detailed || "暂无"
        }),
        l: common_vendor.p({
          margin: "10px 0",
          padding: "10px 0"
        }),
        m: common_vendor.o(cart),
        n: common_vendor.o(buy),
        o: common_vendor.p({
          type: "sp",
          text: "立即购买"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/goods/pages/spGoods/spGoods.vue"]]);
wx.createPage(MiniProgramPage);
