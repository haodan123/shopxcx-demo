"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
if (!Array) {
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  _easycom_uv_tabs2();
}
const _easycom_uv_tabs = () => "../../../../uni_modules/uv-tabs/components/uv-tabs/uv-tabs.js";
if (!Math) {
  _easycom_uv_tabs();
}
const _sfc_main = {
  __name: "renzhong",
  setup(__props) {
    const current = common_vendor.ref(0);
    const list1 = common_vendor.ref([{
      name: "家畜猪牛羊"
    }, {
      name: "家禽鸡鸭鱼"
    }]);
    common_vendor.ref([{
      d: 21
    }]);
    common_vendor.onShow(() => {
      getList();
    });
    const tapTabs = (e) => {
      console.log(e);
      current.value = e.index;
      getList();
    };
    const getList = async () => {
      ({
        "yid": common_vendor.index.getStorageSync("userInfo").id,
        //用户id
        "status": current.value
        //订单状态
      });
    };
    const toRenzhong = (item) => {
      common_vendor.index.navigateTo({
        url: `/pages/goods/pages/rzGoods/rzGoods?id=${1}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(tapTabs),
        b: common_vendor.p({
          current: current.value,
          list: list1.value,
          lineColor: "#76C071"
        }),
        c: common_vendor.f(4, (item, k0, i0) => {
          return {
            a: common_vendor.o(($event) => toRenzhong(), item),
            b: item
          };
        }),
        d: common_assets._imports_0,
        e: common_vendor.t("苹果树"),
        f: common_vendor.t("生长周期100天"),
        g: common_vendor.t("￥"),
        h: common_vendor.t("立即认种")
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e2c44d1b"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/home/pages/renzhong/renzhong.vue"]]);
wx.createPage(MiniProgramPage);
