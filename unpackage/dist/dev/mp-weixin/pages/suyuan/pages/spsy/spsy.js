"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  _easycom_uv_tabs2();
}
const _easycom_uv_tabs = () => "../../../../uni_modules/uv-tabs/components/uv-tabs/uv-tabs.js";
if (!Math) {
  (_easycom_uv_tabs + common_vendor.unref(cpxx) + syda)();
}
const syda = () => "./components/syda.js";
const cpxx = () => "./components/cpxx.js";
const _sfc_main = {
  __name: "spsy",
  setup(__props) {
    const imgUrls = common_vendor.ref(["https://pgz-static.shidongvr.com/temp/hzy.jpg"]);
    const list1 = common_vendor.ref([{
      name: "商品介绍"
    }, {
      name: "溯源信息"
    }]);
    const current = common_vendor.ref(0);
    const obj = common_vendor.ref({});
    common_vendor.onShow(() => {
    });
    const tabsclick = (res) => {
      current.value = res.index;
    };
    const swiperchange = (res) => {
      current.value = res.detail.current;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(imgUrls.value, (img, key, i0) => {
          return {
            a: img,
            b: key
          };
        }),
        b: common_vendor.o(tabsclick),
        c: common_vendor.p({
          current: current.value,
          list: list1.value,
          lineColor: "#1bb888",
          activeStyle: "color:#1bb888;font-weight:bold",
          lineWidth: "70px",
          itemStyle: "width:140px;height:45px"
        }),
        d: common_vendor.p({
          obj: obj.value
        }),
        e: common_vendor.p({
          obj: obj.value
        }),
        f: current.value,
        g: common_vendor.o(swiperchange)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/suyuan/pages/spsy/spsy.vue"]]);
wx.createPage(MiniProgramPage);
