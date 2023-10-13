"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
if (!Array) {
  const _easycom_win_slideshow2 = common_vendor.resolveComponent("win-slideshow");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_bctos_rich_text2 = common_vendor.resolveComponent("bctos-rich-text");
  (_easycom_win_slideshow2 + _easycom_uni_card2 + _easycom_bctos_rich_text2)();
}
const _easycom_win_slideshow = () => "../../../../components/win-slideshow/win-slideshow.js";
const _easycom_uni_card = () => "../../../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_bctos_rich_text = () => "../../../../components/bctos-rich-text/bctos-rich-text.js";
if (!Math) {
  (_easycom_win_slideshow + _easycom_uni_card + _easycom_bctos_rich_text)();
}
const _sfc_main = {
  __name: "myrenzhongDetail",
  setup(__props) {
    const shopid = common_vendor.ref("");
    const bannerList = common_vendor.ref([
      common_assets._imports_0,
      common_assets._imports_0,
      common_assets._imports_0,
      common_assets._imports_0,
      common_assets._imports_0
    ]);
    const shopObj = common_vendor.ref({});
    common_vendor.ref(1);
    common_vendor.ref();
    common_vendor.onLoad(({
      id
    }) => {
      shopid.value = id;
    });
    common_vendor.onShow(() => {
      getData();
    });
    const getData = async () => {
      let data = {
        id: shopid.value
      };
      const res = await common_vendor.index.$api.shangpinxiangqing(data);
      shopObj.value = res.data[0];
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          schoolers: bannerList.value
        }),
        b: common_vendor.t(shopObj.value.subtitle),
        c: common_vendor.p({
          margin: "10px 0",
          padding: "10px 0"
        }),
        d: common_vendor.p({
          nodes: shopObj.value.detailed
        }),
        e: common_vendor.p({
          margin: "10px 0",
          padding: "10px 0"
        }),
        f: common_vendor.p({
          nodes: shopObj.value.detailed
        }),
        g: common_vendor.p({
          margin: "10px 0",
          padding: "10px 0"
        }),
        h: common_vendor.p({
          nodes: shopObj.value.detailed
        }),
        i: common_vendor.p({
          margin: "10px 0",
          padding: "10px 0"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/home/pages/myrenzhongDetail/myrenzhongDetail.vue"]]);
wx.createPage(MiniProgramPage);
