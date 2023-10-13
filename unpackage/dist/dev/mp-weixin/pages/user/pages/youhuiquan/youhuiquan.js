"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _easycom_cards2 = common_vendor.resolveComponent("cards");
  (_easycom_uv_tabs2 + _easycom_cards2)();
}
const _easycom_uv_tabs = () => "../../../../uni_modules/uv-tabs/components/uv-tabs/uv-tabs.js";
const _easycom_cards = () => "../../../../components/cards/cards.js";
if (!Math) {
  (_easycom_uv_tabs + _easycom_cards)();
}
const _sfc_main = {
  __name: "youhuiquan",
  setup(__props) {
    const current = common_vendor.ref("");
    const list1 = common_vendor.ref([{
      name: "全部",
      id: ""
    }, {
      name: "未使用",
      id: 1
    }, {
      name: "已使用",
      id: 2
    }, {
      name: "已失效",
      id: 3
    }]);
    const list = common_vendor.ref([1, 2, 3]);
    common_vendor.onShow(() => {
      getList();
    });
    const getList = async () => {
      ({
        "yid": common_vendor.index.getStorageSync("userInfo").id,
        //用户id
        status: current.value
        //1 未使用 2 已使用 3已失效 
      });
    };
    const tapTabs = (e) => {
      console.log(e);
      current.value = e.id;
      getList();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(tapTabs),
        b: common_vendor.p({
          list: list1.value,
          lineColor: "#76C071"
        }),
        c: common_vendor.p({
          List: list.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4203e16c"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/user/pages/youhuiquan/youhuiquan.vue"]]);
wx.createPage(MiniProgramPage);
