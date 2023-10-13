"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
if (!Array) {
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_uv_tabs2 + _easycom_uv_button2)();
}
const _easycom_uv_tabs = () => "../../../../uni_modules/uv-tabs/components/uv-tabs/uv-tabs.js";
const _easycom_uv_button = () => "../../../../uni_modules/uv-button/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_tabs + _easycom_uv_button)();
}
const _sfc_main = {
  __name: "tudi",
  setup(__props) {
    const current = common_vendor.ref(0);
    const list1 = common_vendor.ref([{
      name: "全部"
    }, {
      name: "成都开心农场"
    }]);
    const list = common_vendor.ref([{
      d: 21
    }]);
    common_vendor.onShow(() => {
      getList();
    });
    const tapTabs = (e) => {
      console.log(e);
      current.value = e.index;
    };
    const getList = async () => {
      let data = {
        "yid": common_vendor.index.getStorageSync("userInfo").id,
        //用户id
        "status": current.value
        //订单状态
      };
      const res = await common_vendor.index.$api.wodetudi(data);
      list.value = res.data;
    };
    const toRenlin = (item) => {
      common_vendor.index.navigateTo({
        url: `/pages/goods/pages/tdGoods/tdGoods?id=${1}`
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
        c: common_vendor.f(list.value, (item, k0, i0) => {
          return {
            a: common_vendor.o(_ctx.toWhat, item),
            b: "15f10c70-1-" + i0,
            c: common_vendor.o(($event) => toRenlin(), item),
            d: item
          };
        }),
        d: common_assets._imports_0,
        e: common_vendor.p({
          type: "success",
          text: "立即认领"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-15f10c70"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/home/pages/tudi/tudi.vue"]]);
wx.createPage(MiniProgramPage);
