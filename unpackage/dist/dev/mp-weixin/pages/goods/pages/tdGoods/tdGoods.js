"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_win_slideshow2 = common_vendor.resolveComponent("win-slideshow");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_chuanganqi2 = common_vendor.resolveComponent("chuanganqi");
  const _easycom_bctos_rich_text2 = common_vendor.resolveComponent("bctos-rich-text");
  const _easycom_goodNav2 = common_vendor.resolveComponent("goodNav");
  const _easycom_uv_radio2 = common_vendor.resolveComponent("uv-radio");
  const _easycom_uv_radio_group2 = common_vendor.resolveComponent("uv-radio-group");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_win_slideshow2 + _easycom_uni_icons2 + _easycom_uni_card2 + _easycom_chuanganqi2 + _easycom_bctos_rich_text2 + _easycom_goodNav2 + _easycom_uv_radio2 + _easycom_uv_radio_group2 + _easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_win_slideshow = () => "../../../../components/win-slideshow/win-slideshow.js";
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_card = () => "../../../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_chuanganqi = () => "../../../../components/chuanganqi/chuanganqi.js";
const _easycom_bctos_rich_text = () => "../../../../components/bctos-rich-text/bctos-rich-text.js";
const _easycom_goodNav = () => "../../../../components/goodNav/goodNav.js";
const _easycom_uv_radio = () => "../../../../uni_modules/uv-radio/components/uv-radio/uv-radio.js";
const _easycom_uv_radio_group = () => "../../../../uni_modules/uv-radio/components/uv-radio-group/uv-radio-group.js";
const _easycom_uni_popup_dialog = () => "../../../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_win_slideshow + _easycom_uni_icons + _easycom_uni_card + _easycom_chuanganqi + _easycom_bctos_rich_text + _easycom_goodNav + _easycom_uv_radio + _easycom_uv_radio_group + _easycom_uni_popup_dialog + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "tdGoods",
  setup(__props) {
    const bannerList = common_vendor.ref([
      "/static/gg.png"
    ]);
    const shopData = common_vendor.ref({});
    common_vendor.ref(1);
    const jwd = common_vendor.ref({});
    common_vendor.ref({});
    common_vendor.onLoad((e) => {
    });
    const popupType = common_vendor.ref("center");
    const popupName = common_vendor.ref("rlzq");
    const year = common_vendor.computed(() => {
      const res = rlzqArr.value.filter((item) => {
        return item.value === rlzqAvtive.value;
      });
      return res[0].text;
    });
    const popup = common_vendor.ref();
    const rlzqAvtive = common_vendor.ref(1);
    const rlzqArr = common_vendor.ref([
      {
        //认领周期
        value: 1,
        text: "一年"
      },
      {
        value: 2,
        text: "两年"
      },
      {
        value: 3,
        text: "三年"
      },
      {
        value: 4,
        text: "四年"
      },
      {
        value: 5,
        text: "五年"
      }
    ]);
    const rmlsxq = common_vendor.ref({});
    const rlmsActive = common_vendor.ref(0);
    const rlmsArr = common_vendor.ref([
      //认领模式
      {
        title: "全托管",
        value: 0,
        price: 5e3,
        text: "农场提供3中种子种植,包采摘,包配送到家"
      },
      {
        title: "全托管",
        value: 0,
        price: 5e3,
        text: "农场提供3中种子种植,包采摘,包配送到家"
      },
      {
        title: "全托管",
        value: 0,
        price: 5e3,
        text: "农场提供3中种子种植,包采摘,包配送到家"
      }
    ]);
    const open = () => {
      popup.value.open();
    };
    const close = () => {
      popup.value.close();
    };
    const opendialog = () => {
      popupName.value = "rlzq";
      popupType.value = "center";
      open();
    };
    const seemore = async () => {
      popupName.value = "rlms";
      popupType.value = "dialog";
      open();
    };
    const openMap = () => {
      common_vendor.index.openLocation({
        latitude: jwd.value[1],
        // 维度
        // latitude: 104.55, // 维度
        longitude: jwd.value[0],
        // 经度
        // longitude: 30.41, // 经度
        scale: 18,
        // 地图缩放级别，范围 5-18
        // name: '目标位置', // 位置名称
        address: shopData.value.address
        // 位置的详细地址
      });
    };
    const buy = () => {
      console.log("sssss");
      shopData.value.detailed = "";
      common_vendor.index.navigateTo({
        url: `/pages/order/pages/creatTdOrder/creatTdOrder?shop=${JSON.stringify(shopData.value)}`
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          schoolers: bannerList.value
        }),
        b: common_vendor.t(shopData.value.freedom || 0),
        c: common_vendor.t(shopData.value.dpid || "暂无"),
        d: common_vendor.t(shopData.value.marea),
        e: common_vendor.t(shopData.value.subtitle || "暂无"),
        f: common_vendor.p({
          type: "location",
          size: "18",
          color: "#999"
        }),
        g: common_vendor.t(shopData.value.address || "暂无"),
        h: common_vendor.o(openMap),
        i: common_vendor.p({
          margin: "10px 0",
          padding: "10px 0"
        }),
        j: common_vendor.t(common_vendor.unref(year)),
        k: common_vendor.p({
          type: "right",
          size: "18",
          color: "#999"
        }),
        l: common_vendor.o(opendialog),
        m: common_vendor.p({
          margin: "10px 0",
          padding: "10px 0"
        }),
        n: common_vendor.p({
          type: "right",
          size: "18",
          color: "#999"
        }),
        o: common_vendor.o(seemore),
        p: common_vendor.f(rlmsArr.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.price),
            c: item.text,
            d: common_vendor.o(($event) => rlmsActive.value = index, index),
            e: rlmsActive.value === index ? 1 : "",
            f: index
          };
        }),
        q: common_vendor.p({
          margin: "10px 0",
          padding: "10px 0"
        }),
        r: common_vendor.p({
          type: "right",
          size: "18",
          color: "#999"
        }),
        s: common_vendor.o((...args) => _ctx.toJiankong && _ctx.toJiankong(...args)),
        t: common_vendor.p({
          margin: "10px 0",
          padding: "10px 0"
        }),
        v: common_vendor.p({
          nodes: shopData.value.detailed
        }),
        w: common_vendor.p({
          margin: "10px 0",
          padding: "10px 0"
        }),
        x: common_vendor.o(buy),
        y: common_vendor.p({
          type: "ny",
          text: "立即认领"
        }),
        z: popupName.value == "rlzq"
      }, popupName.value == "rlzq" ? {
        A: common_vendor.f(rlzqArr.value, (item, index, i0) => {
          return {
            a: index,
            b: "b101b920-16-" + i0 + ",b101b920-15",
            c: common_vendor.p({
              customStyle: {
                marginBottom: "8px"
              },
              label: item.text,
              name: item.value
            })
          };
        }),
        B: common_vendor.o(($event) => rlzqAvtive.value = $event),
        C: common_vendor.p({
          placement: "column",
          modelValue: rlzqAvtive.value
        }),
        D: common_vendor.o(close),
        E: common_vendor.o(close),
        F: common_vendor.p({
          mode: "input",
          title: "认领周期",
          message: "请选择你要认领的周期",
          duration: 2e3,
          ["before-close"]: true
        })
      } : {}, {
        G: popupName.value == "rlms"
      }, popupName.value == "rlms" ? {
        H: common_vendor.p({
          nodes: rmlsxq.value.detailed
        }),
        I: common_vendor.o(close),
        J: common_vendor.o(close),
        K: common_vendor.p({
          mode: "input",
          title: "认领模式详情",
          duration: 2e3,
          ["before-close"]: true
        })
      } : {}, {
        L: common_vendor.sr(popup, "b101b920-13", {
          "k": "popup"
        }),
        M: common_vendor.p({
          type: popupType.value
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b101b920"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/goods/pages/tdGoods/tdGoods.vue"]]);
wx.createPage(MiniProgramPage);
