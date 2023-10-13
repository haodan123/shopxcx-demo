"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
if (!Array) {
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_uv_tabs2 + _easycom_uni_icons2 + _easycom_uv_button2)();
}
const _easycom_uv_tabs = () => "../../../../uni_modules/uv-tabs/components/uv-tabs/uv-tabs.js";
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_button = () => "../../../../uni_modules/uv-button/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_tabs + _easycom_uni_icons + _easycom_uv_button)();
}
const _sfc_main = {
  __name: "kaipiao",
  setup(__props) {
    const {
      safeAreaInsets
    } = common_vendor.index.getSystemInfoSync();
    const current = common_vendor.ref(0);
    const list1 = common_vendor.ref([{
      name: "待开票订单"
    }, {
      name: "已提交订单"
    }]);
    const list = common_vendor.ref([{
      checked: false
    }, {
      checked: false
    }, {
      checked: false
    }]);
    common_vendor.onShow(() => {
    });
    const tapChecked = (item) => {
      item.checked = !item.checked;
    };
    const allChecked = common_vendor.computed(() => {
      return list.value.length && list.value.every((v) => v.checked);
    });
    const onChangeSelectedAll = () => {
      const allChecked1 = !allChecked.value;
      list.value.forEach((item) => {
        item.checked = allChecked1;
      });
    };
    const goKp = () => {
      common_vendor.index.navigateTo({
        url: `/pages/user/pages/kaipiaoAdd/kaipiaoAdd`
      });
    };
    const tapTabs = (e) => {
      console.log(e);
      current.value = e.index;
    };
    return (_ctx, _cache) => {
      var _a;
      return common_vendor.e({
        a: common_vendor.o(tapTabs),
        b: common_vendor.p({
          current: current.value,
          list: list1.value,
          lineColor: "#76C071"
        }),
        c: common_vendor.f(list.value, (item, index, i0) => {
          return common_vendor.e(current.value == 0 ? common_vendor.e({
            a: item.checked
          }, item.checked ? {
            b: "81c9e582-1-" + i0,
            c: common_vendor.p({
              type: "circle-filled",
              color: "#76C071",
              size: "30"
            })
          } : {
            d: "81c9e582-2-" + i0,
            e: common_vendor.p({
              type: "circle",
              size: "30",
              color: "#999"
            })
          }, {
            f: common_vendor.o(($event) => tapChecked(item), index)
          }) : {}, {
            g: common_vendor.f(3, (item2, k1, i1) => {
              return {
                a: item2
              };
            })
          }, current.value == 0 ? {} : {}, {
            h: index
          });
        }),
        d: current.value == 0,
        e: common_assets._imports_0,
        f: current.value == 0,
        g: current.value == 0
      }, current.value == 0 ? common_vendor.e({
        h: common_vendor.unref(allChecked)
      }, common_vendor.unref(allChecked) ? {
        i: common_vendor.p({
          type: "circle-filled",
          color: "#76C071",
          size: "30"
        })
      } : {
        j: common_vendor.p({
          type: "circle",
          size: "30",
          color: "#999"
        })
      }, {
        k: common_vendor.o(onChangeSelectedAll),
        l: common_vendor.o(goKp),
        m: common_vendor.p({
          type: "success",
          text: "去开票"
        }),
        n: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.bottom) + "px"
      }) : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-81c9e582"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/user/pages/kaipiao/kaipiao.vue"]]);
wx.createPage(MiniProgramPage);
