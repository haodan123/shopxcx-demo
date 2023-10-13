"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Array) {
  const _easycom_uv_search2 = common_vendor.resolveComponent("uv-search");
  const _easycom_uv_scroll_list2 = common_vendor.resolveComponent("uv-scroll-list");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uv_empty2 = common_vendor.resolveComponent("uv-empty");
  (_easycom_uv_search2 + _easycom_uv_scroll_list2 + _easycom_uni_icons2 + _easycom_uv_empty2)();
}
const _easycom_uv_search = () => "../../../uni_modules/uv-search/components/uv-search/uv-search.js";
const _easycom_uv_scroll_list = () => "../../../uni_modules/uv-scroll-list/components/uv-scroll-list/uv-scroll-list.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_empty = () => "../../../uni_modules/uv-empty/components/uv-empty/uv-empty.js";
if (!Math) {
  (_easycom_uv_search + _easycom_uv_scroll_list + _easycom_uni_icons + _easycom_uv_empty + typePopup)();
}
const typePopup = () => "../../../components/typePopup/typePopup.js";
const _sfc_main = {
  __name: "category",
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
    const leftActive = common_vendor.ref(0);
    const leftArr = common_vendor.ref([
      {
        name: "蔬菜种子",
        id: 0
      },
      {
        name: "水果种苗",
        id: 1
      },
      {
        name: "农具租赁",
        id: 2
      },
      {
        name: "研学体验",
        id: 3
      }
    ]);
    const list = common_vendor.ref([1]);
    common_vendor.onShow(() => {
    });
    const isLike = (item) => {
      common_vendor.index.showToast({
        title: "点击了喜欢",
        icon: "none"
      });
    };
    const addCart = (item) => {
      common_vendor.index.showToast({
        title: "点击了加入购物车",
        icon: "none"
      });
    };
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
      return common_vendor.e({
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
        i: common_vendor.f(leftArr.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.o(($event) => doAside(item.id), item.id),
            c: item.id == leftActive.value ? 1 : "",
            d: item.id
          };
        }),
        j: list.value.length !== 0
      }, list.value.length !== 0 ? {
        k: common_vendor.f(list.value, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.o(($event) => isLike(item.id), item.id),
            b: "c0423b92-3-" + i0,
            c: common_vendor.p({
              type: "star-filled",
              color: "#ffca3e",
              size: "30"
            })
          }, {
            g: common_vendor.o(($event) => addCart(item.id), item.id),
            h: "c0423b92-5-" + i0,
            i: item.id,
            j: common_vendor.o(($event) => tospGoods(), item.id)
          });
        }),
        l: common_assets._imports_0,
        m: common_vendor.t("花生油每桶5L"),
        n: common_vendor.t(1e3),
        o: common_vendor.p({
          type: "plus-filled",
          color: "#76C071",
          size: "30"
        })
      } : {
        p: common_vendor.p({
          mode: "list",
          icon: "https://cdn.uviewui.com/uview/empty/list.png"
        })
      }, {
        q: common_vendor.o(useType),
        r: common_vendor.o(close),
        s: common_vendor.p({
          active: topActive.value,
          show: popup.value
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/tabBar/category/category.vue"]]);
wx.createPage(MiniProgramPage);
