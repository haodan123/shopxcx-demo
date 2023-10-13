"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Array) {
  const _easycom_uv_search2 = common_vendor.resolveComponent("uv-search");
  const _easycom_uv_empty2 = common_vendor.resolveComponent("uv-empty");
  (_easycom_uv_search2 + _easycom_uv_empty2)();
}
const _easycom_uv_search = () => "../../../uni_modules/uv-search/components/uv-search/uv-search.js";
const _easycom_uv_empty = () => "../../../uni_modules/uv-empty/components/uv-empty/uv-empty.js";
if (!Math) {
  (_easycom_uv_search + _easycom_uv_empty)();
}
const _sfc_main = {
  __name: "shop",
  setup(__props) {
    const keyword = common_vendor.ref("");
    const leftActive = common_vendor.ref(0);
    const leftArr = common_vendor.ref([
      {
        name: "蔬菜认养",
        id: 0
      },
      {
        name: "水果认养",
        id: 1
      },
      {
        name: "农具认养",
        id: 2
      },
      {
        name: "研学认养",
        id: 3
      }
    ]);
    const list = common_vendor.ref([1]);
    const search = async (e) => {
      console.log(keyword.value);
      ({
        // "classa": leftActive.value,//类目id
        "sname": keyword.value
        //商品名称
      });
    };
    const doAside = (id) => {
      leftActive.value = id;
      getList();
    };
    const getList = async () => {
      ({
        "classa": leftActive.value
        //类目id
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(leftArr.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.o(($event) => doAside(item.id), item.id),
            c: item.id == leftActive.value ? 1 : "",
            d: item.id
          };
        }),
        b: common_vendor.o(search),
        c: common_vendor.o(search),
        d: common_vendor.o(($event) => keyword.value = $event),
        e: common_vendor.p({
          showAction: true,
          actionText: "搜索",
          animation: true,
          modelValue: keyword.value
        }),
        f: list.value.length !== 0
      }, list.value.length !== 0 ? {
        g: common_vendor.f(5, (item, k0, i0) => {
          return {
            a: item.id
          };
        }),
        h: common_assets._imports_0,
        i: common_vendor.t("花生油每桶5L"),
        j: common_vendor.t(1e3)
      } : {
        k: common_vendor.p({
          mode: "list",
          icon: "https://cdn.uviewui.com/uview/empty/list.png"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1f9874ee"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/tabBar/shop/shop.vue"]]);
wx.createPage(MiniProgramPage);
