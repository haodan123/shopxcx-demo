"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  (_easycom_uni_icons2 + _easycom_uni_number_box2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_number_box = () => "../../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_swipe_action_item = () => "../../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_number_box + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action)();
}
const _sfc_main = {
  __name: "cart",
  setup(__props) {
    const cartList = common_vendor.ref([{
      selected: false,
      id: 1,
      picture: "",
      name: "商品1",
      attrsText: "副标题",
      nowPrice: 122.02,
      count: 2
    }, {
      selected: false,
      id: 2,
      picture: "static/pg1.jpg",
      name: "商品2",
      attrsText: "副标题",
      nowPrice: 122.03,
      count: 4
    }]);
    const getMemberCartData = async () => {
    };
    common_vendor.onShow(() => {
      getMemberCartData();
    });
    const onDeleteCart = (skuId) => {
      common_vendor.index.showModal({
        content: "是否删除该商品",
        success: async (res) => {
          if (res.confirm) {
            getMemberCartData();
          }
        }
      });
    };
    const onChangeCount = (ev) => {
    };
    const onChangeSelected = (item) => {
      item.selected = !item.selected;
    };
    const isSelectedAll = common_vendor.computed(() => {
      return cartList.value.length && cartList.value.every((v) => v.selected);
    });
    const onChangeSelectedAll = () => {
      const _isSelectedAll = !isSelectedAll.value;
      cartList.value.forEach((item) => {
        item.selected = _isSelectedAll;
      });
    };
    const selectedCartList = common_vendor.computed(() => {
      return cartList.value.filter((v) => v.selected);
    });
    const selectedCartListCount = common_vendor.computed(() => {
      return selectedCartList.value.reduce((sum, item) => sum + item.count, 0);
    });
    const selectedCartListMoney = common_vendor.computed(() => {
      const res = selectedCartList.value.reduce((sum, item) => sum + item.count * item.nowPrice, 0);
      const money = common_vendor.index.$toFixed(res, 2);
      return money;
    });
    const gotoPayment = () => {
      if (selectedCartListCount.value === 0) {
        return common_vendor.index.showToast({
          icon: "none",
          title: "请选择商品"
        });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e(common_vendor.e(common_vendor.e({
        a: common_vendor.unref(selectedCartListCount) > 0
      }, common_vendor.unref(selectedCartListCount) > 0 ? {
        b: common_vendor.t(common_vendor.unref(selectedCartListCount))
      } : {}, {
        c: common_vendor.f(cartList.value, (item, k0, i0) => {
          return common_vendor.e({
            a: item.selected
          }, item.selected ? {
            b: "ccd55012-2-" + i0 + "," + ("ccd55012-1-" + i0),
            c: common_vendor.p({
              type: "circle-filled",
              color: "#76C071",
              size: "30"
            })
          } : {
            d: "ccd55012-3-" + i0 + "," + ("ccd55012-1-" + i0),
            e: common_vendor.p({
              type: "circle",
              size: "30",
              color: "#999"
            })
          }, {
            f: common_vendor.o(($event) => onChangeSelected(item), item.skuId),
            g: common_vendor.t(item.name),
            h: common_vendor.t(item.attrsText),
            i: common_vendor.t(item.nowPrice),
            j: common_vendor.o(onChangeCount, item.skuId),
            k: "ccd55012-4-" + i0 + "," + ("ccd55012-1-" + i0),
            l: common_vendor.o(($event) => item.count = $event, item.skuId),
            m: common_vendor.p({
              min: 1,
              max: 9,
              modelValue: item.count
            }),
            n: common_vendor.o(($event) => onDeleteCart(item.skuId), item.skuId),
            o: item.skuId,
            p: "ccd55012-1-" + i0 + ",ccd55012-0"
          });
        }),
        d: common_assets._imports_0
      }), {
        e: common_vendor.unref(isSelectedAll)
      }, common_vendor.unref(isSelectedAll) ? {
        f: common_vendor.p({
          type: "circle-filled",
          color: "#76C071",
          size: "30"
        })
      } : {
        g: common_vendor.p({
          type: "circle",
          size: "30",
          color: "#999"
        })
      }, {
        h: common_vendor.o(onChangeSelectedAll),
        i: common_vendor.t(common_vendor.unref(selectedCartListMoney)),
        j: common_vendor.t(common_vendor.unref(selectedCartListCount)),
        k: common_vendor.o(gotoPayment),
        l: common_vendor.unref(selectedCartListCount) === 0 ? 1 : ""
      }), {
        m: common_vendor.o((...args) => _ctx.onScrolltolower && _ctx.onScrolltolower(...args))
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/tabBar/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
