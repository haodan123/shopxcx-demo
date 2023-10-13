"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
if (!Array) {
  const _easycom_win_slideshow2 = common_vendor.resolveComponent("win-slideshow");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_chuanganqi2 = common_vendor.resolveComponent("chuanganqi");
  (_easycom_win_slideshow2 + _easycom_uni_icons2 + _easycom_uni_card2 + _easycom_chuanganqi2)();
}
const _easycom_win_slideshow = () => "../../../../components/win-slideshow/win-slideshow.js";
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_card = () => "../../../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_chuanganqi = () => "../../../../components/chuanganqi/chuanganqi.js";
if (!Math) {
  (_easycom_win_slideshow + _easycom_uni_icons + _easycom_uni_card + _easycom_chuanganqi)();
}
const __default__ = {
  onLoad(e) {
  },
  methods: {}
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "mytudiDetail",
  setup(__props) {
    const bannerList = common_vendor.ref([
      common_assets._imports_0,
      common_assets._imports_0,
      common_assets._imports_0,
      common_assets._imports_0
    ]);
    const xqObj = common_vendor.ref({});
    const days = common_vendor.ref(1);
    const jwd = common_vendor.ref({});
    const sydata = common_vendor.ref({});
    common_vendor.onLoad((e) => {
      let tddata = {};
      tddata = JSON.parse(e.tddata);
      ({
        "id": tddata.did,
        //主键
        "massifid": tddata.qid
        //区域id
      });
      sydata.value = tddata;
      days.value = tddata.days;
    });
    const goSuyuan = () => {
      console.log(sydata.value);
      common_vendor.index.navigateTo({
        url: `/pages/suyuan/pages/tdsy/tdsy?sydata=${JSON.stringify(sydata.value)}`
      });
    };
    const openMap = () => {
      common_vendor.index.openLocation({
        latitude: jwd.value[1],
        // 维度
        // latitude: 104.55, // 维度
        longitude: jwd.value[0],
        // 经度
        // longitude: 30.41, // 经度
        scale: 18,
        // 地图缩放级别，范围 5-18
        // name: '目标位置', // 位置名称
        address: xqObj.value.address
        // 位置的详细地址
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          schoolers: bannerList.value
        }),
        b: common_vendor.t(xqObj.value.dpid),
        c: common_vendor.o(goSuyuan),
        d: common_vendor.t(xqObj.value.subtitle),
        e: common_vendor.p({
          type: "location",
          size: "18",
          color: "#999"
        }),
        f: common_vendor.t(xqObj.value.address),
        g: common_vendor.o(openMap),
        h: common_vendor.p({
          margin: "10px 0",
          padding: "10px 0"
        }),
        i: common_vendor.t(days.value),
        j: common_vendor.p({
          margin: "10px 0",
          padding: "10px 0"
        }),
        k: common_vendor.p({
          type: "right",
          size: "18",
          color: "#999"
        }),
        l: common_vendor.o((...args) => _ctx.toJiankong && _ctx.toJiankong(...args)),
        m: common_vendor.p({
          margin: "10px 0",
          padding: "10px 0"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-93883c16"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/shop/pages/mytudiDetail/mytudiDetail.vue"]]);
wx.createPage(MiniProgramPage);
