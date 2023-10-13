"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
if (!Array) {
  const _easycom_uv_search2 = common_vendor.resolveComponent("uv-search");
  const _easycom_uv_scroll_list2 = common_vendor.resolveComponent("uv-scroll-list");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uv_search2 + _easycom_uv_scroll_list2 + _easycom_uni_icons2)();
}
const _easycom_uv_search = () => "../../../../uni_modules/uv-search/components/uv-search/uv-search.js";
const _easycom_uv_scroll_list = () => "../../../../uni_modules/uv-scroll-list/components/uv-scroll-list/uv-scroll-list.js";
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uv_search + _easycom_uv_scroll_list + _easycom_uni_icons + typePopup)();
}
const typePopup = () => "../../../../components/typePopup/typePopup.js";
const _sfc_main = {
  __name: "huodongyh",
  setup(__props) {
    const topActive = common_vendor.ref(0);
    const useType = (index) => {
      topActive.value = index;
      close();
    };
    const tapTopBar = async (index) => {
      topActive.value = index;
    };
    const popup = common_vendor.ref(false);
    const keyword = common_vendor.ref("");
    common_vendor.ref([]);
    common_vendor.onShow(() => {
    });
    const search = async (e) => {
      console.log(keyword.value);
      ({
        // "classa": leftActive.value,//类目id
        "sname": keyword.value
        //商品名称
      });
    };
    const tospGoods = (item) => {
      common_vendor.index.navigateTo({
        url: `/pages/goods/pages/spGoods/spGoods?id=${12}`
      });
    };
    const open = () => {
      popup.value = true;
    };
    const close = () => {
      popup.value = false;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(search),
        b: common_vendor.o(search),
        c: common_vendor.o(($event) => keyword.value = $event),
        d: common_vendor.p({
          showAction: true,
          actionText: "搜索",
          animation: true,
          modelValue: keyword.value
        }),
        e: common_vendor.f(10, (item, index, i0) => {
          return {
            a: index == topActive.value ? 1 : "",
            b: index,
            c: common_vendor.o(($event) => tapTopBar(index), index)
          };
        }),
        f: common_vendor.p({
          indicator: false
        }),
        g: common_vendor.p({
          type: "download",
          color: "#000",
          size: "15"
        }),
        h: common_vendor.o(open),
        i: common_vendor.f(10, (item, index, i0) => {
          return common_vendor.e({
            a: index % 2 == 0
          }, index % 2 == 0 ? {} : {}, {
            b: index,
            c: common_vendor.o(($event) => tospGoods(), index)
          });
        }),
        j: common_assets._imports_0,
        k: common_vendor.o(useType),
        l: common_vendor.o(close),
        m: common_vendor.p({
          active: topActive.value,
          show: popup.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/home/pages/huodongyh/huodongyh.vue"]]);
wx.createPage(MiniProgramPage);
