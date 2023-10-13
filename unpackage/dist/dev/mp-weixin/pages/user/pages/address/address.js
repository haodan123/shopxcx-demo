"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "address",
  setup(__props) {
    const source = common_vendor.ref(0);
    const addressList = common_vendor.ref([{
      name: "刘晓晓",
      mobile: "18666666666",
      addressName: "贵族皇仕牛排(东城店)",
      address: "北京市东城区",
      default: true,
      moren: 1
    }, {
      name: "刘大大",
      mobile: "18667766666",
      addressName: "龙回1区12号楼",
      address: "山东省济南市历城区",
      default: false
    }]);
    common_vendor.onLoad((option) => {
      source.value = option.source;
    });
    common_vendor.onShow(() => {
      getList();
    });
    const getList = async () => {
      ({
        "loginid": common_vendor.index.getStorageSync("userInfo").id
      });
    };
    const checkAddress = (item) => {
      if (source.value == 1) {
        common_vendor.index.$emit("SELECT_ADDRESS", {
          addressInfo: item
        });
        common_vendor.index.navigateBack();
      }
    };
    const addAddress = (type, item) => {
      common_vendor.index.navigateTo({
        url: `/pages/user/pages/addressManage/addressManage?type=${type}&data=${JSON.stringify(item)}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(addressList.value, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.mobile),
            c: item.moren == "1"
          }, item.moren == "1" ? {} : {}, {
            d: common_vendor.t(item.address),
            e: common_vendor.t(item.addressName),
            f: common_vendor.o(($event) => addAddress("edit", item), index),
            g: "7b43a9e3-0-" + i0,
            h: index,
            i: common_vendor.o(($event) => checkAddress(item), index)
          });
        }),
        b: common_vendor.p({
          type: "icon-xiugai",
          ["custom-prefix"]: "ceshi",
          color: "#ccc",
          size: "30"
        }),
        c: common_vendor.o(($event) => addAddress("add"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/user/pages/address/address.vue"]]);
wx.createPage(MiniProgramPage);
