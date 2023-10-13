"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const stores_index = require("./stores/index.js");
const config_globalConfig = require("./config/global-config.js");
require("./network/request.js");
require("./utils/index.js");
require("./stores/modules/user.js");
if (!Math) {
  "./pages/tabBar/home/home.js";
  "./pages/tabBar/category/category.js";
  "./pages/tabBar/shop/shop.js";
  "./pages/tabBar/cart/cart.js";
  "./pages/tabBar/user/user.js";
  "./pages/home/pages/Location/Location.js";
  "./pages/home/pages/myrenyang/myrenyang.js";
  "./pages/home/pages/myrenzhong/myrenzhong.js";
  "./pages/home/pages/mytudi/mytudi.js";
  "./pages/home/pages/mytudiDetail/mytudiDetail.js";
  "./pages/home/pages/renyang/renyang.js";
  "./pages/home/pages/renzhong/renzhong.js";
  "./pages/home/pages/tudi/tudi.js";
  "./pages/home/pages/huanjingck/huanjingck.js";
  "./pages/home/pages/zhiboList/zhiboList.js";
  "./pages/home/pages/huodongyh/huodongyh.js";
  "./pages/home/pages/myrenyangDetail/myrenyangDetail.js";
  "./pages/home/pages/myrenzhongDetail/myrenzhongDetail.js";
  "./pages/shop/pages/myrenyang/myrenyang.js";
  "./pages/shop/pages/myrenzhong/myrenzhong.js";
  "./pages/shop/pages/mytudi/mytudi.js";
  "./pages/shop/pages/mytudiDetail/mytudiDetail.js";
  "./pages/shop/pages/renyang/renyang.js";
  "./pages/shop/pages/renzhong/renzhong.js";
  "./pages/shop/pages/tudi/tudi.js";
  "./pages/shop/pages/huanjingck/huanjingck.js";
  "./pages/shop/pages/huodongyh/huodongyh.js";
  "./pages/shop/pages/myrenyangDetail/myrenyangDetail.js";
  "./pages/shop/pages/myrenzhongDetail/myrenzhongDetail.js";
  "./pages/suyuan/pages/spsy/spsy.js";
  "./pages/suyuan/pages/tdsy/tdsy.js";
  "./pages/user/pages/address/address.js";
  "./pages/user/pages/addressManage/addressManage.js";
  "./pages/user/pages/setting/setting.js";
  "./pages/user/pages/youhuiquan/youhuiquan.js";
  "./pages/user/pages/myCoupon/myCoupon.js";
  "./pages/user/pages/shoucang/shoucang.js";
  "./pages/user/pages/tuikuan/tuikuan.js";
  "./pages/user/pages/kaipiao/kaipiao.js";
  "./pages/user/pages/kaipiaoAdd/kaipiaoAdd.js";
  "./pages/user/pages/taitou/taitou.js";
  "./pages/user/pages/taitouAdd/taitouAdd.js";
  "./pages/xieyi/pages/index/index.js";
  "./pages/xieyi/pages/shouhou/shouhou.js";
  "./pages/xieyi/pages/zhifu/zhifu.js";
  "./pages/xieyi/pages/renling/renling.js";
  "./pages/xieyi/pages/renzhong/renzhong.js";
  "./pages/xieyi/pages/renyang/renyang.js";
  "./pages/goods/pages/ryGoods/ryGoods.js";
  "./pages/goods/pages/rzGoods/rzGoods.js";
  "./pages/goods/pages/spGoods/spGoods.js";
  "./pages/goods/pages/tdGoods/tdGoods.js";
  "./pages/order/pages/myOrder/myOrder.js";
  "./pages/order/pages/orderDetail/orderDetail.js";
  "./pages/order/pages/creatRzOrder/creatRzOrder.js";
  "./pages/order/pages/creatRyOrder/creatRyOrder.js";
  "./pages/order/pages/creatSpOrder/creatSpOrder.js";
  "./pages/order/pages/creatTdOrder/creatTdOrder.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/App.vue"]]);
common_vendor.index.$safeTop = common_vendor.index.getSystemInfoSync().safeAreaInsets.top;
common_vendor.index.$safeBtm = common_vendor.index.getSystemInfoSync().safeAreaInsets.bottom;
common_vendor.index.$uploadUrl = config_globalConfig.uploadUrl;
common_vendor.index.$imgUrl = config_globalConfig.imgUrl;
common_vendor.index.$msgBox = (text) => {
  common_vendor.index.showToast({
    title: text,
    icon: "none"
  });
};
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(stores_index.pinia);
  return {
    app,
    pinia: stores_index.pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
