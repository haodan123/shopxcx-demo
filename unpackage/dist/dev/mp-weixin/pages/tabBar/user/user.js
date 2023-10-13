"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uv_button2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_button = () => "../../../uni_modules/uv-button/components/uv-button/uv-button.js";
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uv_button + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const defaultAvatarUrl = common_assets.nologin;
    const MyOrders = [
      {
        index: 0,
        name: "全部订单",
        imgurl: "/static/user/all.png",
        pageurl: "/pages/order/pages/myOrder/myOrder?id=0"
      },
      {
        index: 1,
        name: "待支付",
        imgurl: "/static/user/dzf.png",
        pageurl: "/pages/order/pages/myOrder/myOrder?id=1"
      },
      {
        index: 2,
        name: "已支付",
        imgurl: "/static/user/yzf.png",
        pageurl: "/pages/order/pages/myOrder/myOrder?id=2"
      },
      {
        index: 3,
        name: "配送中",
        imgurl: "/static/user/psz.png",
        pageurl: "/pages/order/pages/myOrder/myOrder?id=3"
      },
      {
        index: 4,
        name: "已完成",
        imgurl: "/static/user/ywc.png",
        pageurl: "/pages/order/pages/myOrder/myOrder?id=4"
      }
    ];
    const MyInformation = [
      {
        index: 0,
        name: "购物车",
        imgurl: "/static/user/gj-gwc.png",
        pageurl: "/pages/global/monitor/monitor"
      },
      {
        index: 1,
        name: "收藏夹",
        imgurl: "/static/user/gj-sc.png",
        pageurl: "/pages/user/pages/shoucang/shoucang"
      },
      {
        index: 2,
        name: "地址",
        imgurl: "/static/user/gj-dz.png",
        pageurl: "/pages/user/pages/address/address"
      },
      {
        index: 3,
        name: "优惠券",
        imgurl: "/static/user/gj-yhq.png",
        pageurl: "/pages/user/pages/myCoupon/myCoupon"
      },
      {
        index: 4,
        name: "我要开票",
        imgurl: "/static/user/gj-kp.png",
        pageurl: "/pages/user/pages/kaipiao/kaipiao"
      },
      {
        index: 5,
        name: "常用抬头",
        imgurl: "/static/user/gj-tt.png",
        pageurl: "/pages/user/pages/taitou/taitou"
      },
      {
        index: 6,
        name: "用户协议",
        imgurl: "/static/user/gj-yh.png",
        pageurl: "/pages/xieyi/pages/index/index"
      },
      {
        index: 7,
        name: "领券",
        imgurl: "/static/user/gj-lq.png",
        pageurl: "/pages/user/pages/youhuiquan/youhuiquan"
      },
      {
        index: 8,
        name: "我的土地",
        imgurl: "/static/user/gj-rl.png",
        pageurl: "/pages/home/pages/mytudi/mytudi"
      },
      {
        index: 9,
        name: "我的认养",
        imgurl: "/static/user/gj-ry.png",
        pageurl: "/pages/home/pages/myrenyang/myrenyang"
      },
      {
        index: 10,
        name: "我的认种",
        imgurl: "/static/user/gj-rz.png",
        pageurl: "/pages/home/pages/myrenzhong/myrenzhong"
      }
      // {
      // 	index: 11,
      // 	name: '联系客服',
      // 	imgurl: '/static/user/gj-kf.png',
      // 	pageurl: '/pages/user/pages/collection/collection'
      // },
    ];
    const tapMyOrder = (item) => {
      common_vendor.index.navigateTo({
        url: item.pageurl
      });
    };
    const tapMyInformation = (item) => {
      common_vendor.index.navigateTo({
        url: item.pageurl
      });
    };
    const toSetting = () => {
      common_vendor.index.navigateTo({
        url: "/pages/user/pages/setting/setting"
      });
    };
    const userInfo = common_vendor.ref({
      nickname: "利长远"
    });
    const popup = common_vendor.ref(null);
    common_vendor.onShow(() => {
    });
    common_vendor.onMounted(() => {
    });
    const Logout = () => {
      common_vendor.index.showModal({
        title: "提示",
        content: "你确定要退出登录吗？",
        success: function(res) {
          if (res.confirm) {
            common_vendor.index.removeStorageSync("userInfo");
            userInfo.value = {};
            common_vendor.index.showToast({
              title: "退出登录成功",
              icon: "none"
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    };
    const open = () => {
      popup.value.open();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: userInfo.value.headsculpture || common_vendor.unref(defaultAvatarUrl),
        b: userInfo.value.nickname
      }, userInfo.value.nickname ? {
        c: common_vendor.t(userInfo.value.nickname || "请登录")
      } : {
        d: common_vendor.o(open)
      }, {
        e: userInfo.value.nickname
      }, userInfo.value.nickname ? {
        f: common_vendor.o(toSetting),
        g: common_vendor.p({
          type: "gear",
          size: "40"
        })
      } : {}, {
        h: userInfo.value.nickname
      }, userInfo.value.nickname ? {} : {}, {
        i: common_vendor.f(MyOrders, (item, index, i0) => {
          return {
            a: item.imgurl,
            b: common_vendor.t(item.name),
            c: common_vendor.o(($event) => tapMyOrder(item), index),
            d: index
          };
        }),
        j: common_vendor.p({
          type: "right",
          size: "15"
        }),
        k: common_vendor.f(MyInformation, (item, k0, i0) => {
          return {
            a: item.imgurl,
            b: common_vendor.t(item.name),
            c: common_vendor.o(($event) => tapMyInformation(item), item.index),
            d: item.index
          };
        }),
        l: userInfo.value.nickname
      }, userInfo.value.nickname ? {
        m: common_vendor.o(Logout),
        n: common_vendor.p({
          type: "success",
          text: "退出登录"
        })
      } : {}, {
        o: common_vendor.o((...args) => _ctx.getPhoneNumber && _ctx.getPhoneNumber(...args)),
        p: common_vendor.sr(popup, "04a4edb3-3", {
          "k": "popup"
        }),
        q: common_vendor.p({
          type: "bottom",
          backgroundColor: "#fff"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-04a4edb3"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/tabBar/user/user.vue"]]);
wx.createPage(MiniProgramPage);
