"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_search2 = common_vendor.resolveComponent("uv-search");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uv_scroll_list2 = common_vendor.resolveComponent("uv-scroll-list");
  (_easycom_uv_icon2 + _easycom_uv_search2 + _easycom_uni_icons2 + _easycom_uv_scroll_list2)();
}
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_search = () => "../../../uni_modules/uv-search/components/uv-search/uv-search.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_scroll_list = () => "../../../uni_modules/uv-scroll-list/components/uv-scroll-list/uv-scroll-list.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_search + _easycom_uni_icons + _easycom_uv_scroll_list)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const list = [{
      image: "https://via.placeholder.com/200x200.png/3c9cff/fff"
    }, {
      image: "https://via.placeholder.com/200x200.png/f9ae3d/fff"
    }, {
      image: "https://via.placeholder.com/200x200.png/5ac725/fff"
    }];
    const bannerList = common_vendor.ref([
      "http://pgz-cctvnp2.shidongvr.com:443/profile/upload/2023/10/08/677c64b3-61e3-435e-85b2-80b1f42db95b.png",
      "http://pgz-cctvnp2.shidongvr.com:443/profile/upload/2023/10/08/232b6e84-3a2e-427d-b465-20dbb237d3ad.png",
      "http://pgz-cctvnp2.shidongvr.com:443/profile/upload/2023/10/08/6471d835-4f86-4000-91f6-3500ee534639.png"
    ]);
    const rlList = common_vendor.ref([
      {
        index: 1,
        name: "禽畜认养",
        imgurl: "/static/home/two-ry.png",
        pageurl: "/pages/home/pages/renyang/renyang"
      },
      {
        index: 2,
        name: "菜园认领",
        imgurl: "/static/home/two-rl.png",
        pageurl: "/pages/home/pages/tudi/tudi"
      },
      {
        index: 3,
        name: "果树认种",
        imgurl: "/static/home/two-rz.png",
        pageurl: "/pages/home/pages/renzhong/renzhong"
      },
      {
        index: 4,
        name: "直播溯源",
        imgurl: "/static/home/two-zb.png",
        pageurl: "/pages/home/pages/zhiboList/zhiboList"
      },
      {
        index: 5,
        name: "环境溯源",
        imgurl: "/static/home/two-hj.png",
        pageurl: "/pages/home/pages/huanjingck/huanjingck"
      }
    ]);
    const keyword = common_vendor.ref("");
    common_vendor.onShow(() => {
      getCityName();
    });
    const toRoute = (item) => {
      common_vendor.index.navigateTo({
        url: item.pageurl
      });
    };
    const search = () => {
      console.log("搜索");
    };
    common_vendor.onLoad(() => {
      getLocationAuth();
    });
    const tospGoods = (item) => {
      common_vendor.index.navigateTo({
        url: `/pages/goods/pages/spGoods/spGoods?id=${12}`
      });
    };
    const addCart = (item) => {
    };
    const toHuodong = () => {
      common_vendor.index.navigateTo({
        url: "/pages/home/pages/huodongyh/huodongyh"
      });
    };
    const city = common_vendor.ref("");
    const getCityName = () => {
      setTimeout(function() {
        common_vendor.index.getStorage({
          key: "City_Name",
          success(res) {
            console.log(res);
            city.value = res.data;
          }
        });
      }, 500);
    };
    const toLocation = () => {
      common_vendor.index.navigateTo({
        url: "/pages/home/pages/Location/Location"
      });
    };
    const getLocationAuth = () => {
      common_vendor.index.getLocation({
        type: "gcj02",
        success(res) {
          let lat = res.latitude;
          let lng = res.longitude;
          let key = "OYMBZ-A6F6V-XAWPF-UQT3N-S4LVO-FEBYJ";
          common_vendor.index.request({
            url: "https://apis.map.qq.com/ws/geocoder/v1/?location=" + lat + "," + lng + "&key=" + key,
            method: "GET",
            success(ress) {
              ress.data;
              let CityName = ress.data.result.address_component.city;
              console.log(ress);
              common_vendor.index.setStorage({
                key: "City_Name",
                data: CityName
              });
            },
            fail() {
              common_vendor.index.showToast({
                "title": "对不起，数据获取失败！",
                "icon": "none"
              });
            }
          });
        },
        fail(err) {
          if (err.errMsg === "getLocation:fail:ERROR_NOCELL&WIFI_LOCATIONSWITCHOFF" || err.errMsg === "getLocation:fail system permission denied") {
            common_vendor.index.showModal({
              content: "请开启手机定位服务",
              showCancel: false
            });
          } else if (err.errMsg === "getLocation:fail:system permission denied") {
            common_vendor.index.showModal({
              content: "请给微信开启定位权限",
              showCancel: false
            });
          }
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "empty-address",
          color: "#ffffff",
          size: "28"
        }),
        b: common_vendor.t(city.value),
        c: common_vendor.p({
          name: "arrow-down",
          color: "#ffffff",
          size: "20"
        }),
        d: common_vendor.o(toLocation),
        e: common_vendor.p({
          name: "server-man",
          color: "#ffffff",
          size: "28"
        }),
        f: common_vendor.o(search),
        g: common_vendor.o(search),
        h: common_vendor.o(($event) => keyword.value = $event),
        i: common_vendor.p({
          bgColor: "#fff",
          borderColor: "#ffffff",
          showAction: true,
          actionText: "搜索",
          animation: true,
          modelValue: keyword.value
        }),
        j: common_vendor.f(bannerList.value, (item, index, i0) => {
          return {
            a: item,
            b: index
          };
        }),
        k: common_vendor.f(rlList.value, (item, index, i0) => {
          return {
            a: item.imgurl,
            b: common_vendor.t(item.name),
            c: common_vendor.o(($event) => toRoute(item), index),
            d: index
          };
        }),
        l: common_vendor.p({
          type: "right",
          size: "15"
        }),
        m: common_vendor.o(toHuodong),
        n: common_vendor.f(list, (item, index, i0) => {
          return common_vendor.e({
            a: item.image,
            b: index % 2 == 0
          }, index % 2 == 0 ? {} : {}, {
            c: index,
            d: common_vendor.o(($event) => tospGoods(), index)
          });
        }),
        o: common_vendor.p({
          indicator: true,
          indicatorColor: "#fff0f0",
          indicatorActiveColor: "#4390B7"
        }),
        p: common_vendor.f(15, (item, index, i0) => {
          return {
            a: index
          };
        }),
        q: common_vendor.unref(common_assets._imports_0),
        r: common_vendor.f(10, (item, index, i0) => {
          return {
            a: "15dac74a-6-" + i0,
            b: common_vendor.o(addCart, index),
            c: index,
            d: common_vendor.o(($event) => tospGoods(), index)
          };
        }),
        s: common_vendor.unref(common_assets._imports_0),
        t: common_vendor.p({
          type: "cart",
          color: "#87BE79",
          size: "30"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-15dac74a"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/tabBar/home/home.vue"]]);
wx.createPage(MiniProgramPage);
