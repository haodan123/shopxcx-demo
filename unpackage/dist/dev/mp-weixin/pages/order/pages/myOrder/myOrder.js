"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _easycom_uv_empty2 = common_vendor.resolveComponent("uv-empty");
  (_easycom_uv_tabs2 + _easycom_uv_empty2)();
}
const _easycom_uv_tabs = () => "../../../../uni_modules/uv-tabs/components/uv-tabs/uv-tabs.js";
const _easycom_uv_empty = () => "../../../../uni_modules/uv-empty/components/uv-empty/uv-empty.js";
if (!Math) {
  (_easycom_uv_tabs + _easycom_uv_empty)();
}
const _sfc_main = {
  __name: "myOrder",
  setup(__props) {
    const current = common_vendor.ref(0);
    const list1 = common_vendor.ref([{
      name: "全部",
      id: 0
    }, {
      name: "待支付",
      id: 1
    }, {
      name: "已支付",
      id: 2
    }, {
      name: "配送中",
      id: 3
    }, {
      name: "已完成",
      id: 4
    }]);
    const list = common_vendor.ref([{}]);
    common_vendor.onLoad((e) => {
      console.log(e);
      current.value = +e.id;
      console.log(current.value);
      getList();
    });
    const tapTabs = (e) => {
      current.value = e.index;
      getList();
    };
    const getList = async () => {
      let data = {
        "yid": common_vendor.index.getStorageSync("userInfo").id,
        //用户id
        "dstatus": current.value
        //订单状态
      };
      const res = await common_vendor.index.$api.wodedingdan(data);
      list.value = res.data;
      list.value.forEach((item) => {
        if (item.dstatus == "2") {
          let datetime = new Date(item.addtime);
          let date = /* @__PURE__ */ new Date();
          item.seconds = (datetime.getMinutes() + 15) * 60 + datetime.getSeconds() - (date.getMinutes() * 60 + date.getSeconds());
        }
      });
      list.value = list.value.map((item) => {
        if (item.seconds && item.seconds > 0) {
          return item;
        }
        return item;
      });
    };
    const goDetail = (item) => {
      common_vendor.index.navigateTo({
        url: `/pages/order/pages/orderDetail/orderDetail?id=${2}`
      });
    };
    const toPay = (item) => {
      {
        common_vendor.index.navigateTo({
          url: `/pages/order/pages/creatTdOrder/creatTdOrder?id=${1}`
        });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(tapTabs),
        b: common_vendor.p({
          current: current.value,
          list: list1.value,
          lineColor: "#76C071"
        }),
        c: list.value.length > 0
      }, list.value.length > 0 ? {
        d: common_vendor.f(4, (item, index, i0) => {
          return common_vendor.e({
            a: index % 2 == 0
          }, index % 2 == 0 ? {
            b: common_vendor.f(3, (item2, k1, i1) => {
              return {
                a: item2
              };
            })
          } : {}, {
            c: index == 0
          }, index == 0 ? {} : {}, {
            d: index == 1
          }, index == 1 ? {} : {}, {
            e: index !== 1 && index !== 0
          }, index !== 1 && index !== 0 ? {} : {}, {
            f: index % 2 == 0
          }, index % 2 == 0 ? {} : {
            g: common_vendor.o(($event) => toPay(), index)
          }, {
            h: index,
            i: common_vendor.o(($event) => goDetail(), index)
          });
        })
      } : {
        e: common_vendor.p({
          mode: "list",
          icon: "https://cdn.uviewui.com/uview/empty/list.png"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/order/pages/myOrder/myOrder.vue"]]);
wx.createPage(MiniProgramPage);
