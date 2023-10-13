"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "addressManage",
  setup(__props) {
    const addressData = common_vendor.ref({
      // shname: '',
      // shphone: '',
      // shaddress: '在地图选择',
      // address: '',
      // xxaddress: '',
      // moren: false,
      name: "",
      mobile: "",
      addressName: "",
      address: "在地图选择",
      moren: 1
      // name: '刘晓晓',
      // mobile: '18666666666',
      // addressName: '贵族皇仕牛排(东城店)',
      // address: '北京市东城区',
      // area: 'B区',
      // default: true,
      // moren: 1
    });
    const manageType = common_vendor.ref("");
    common_vendor.onLoad((option) => {
      let title = "新增收货地址";
      if (option.type === "edit") {
        title = "编辑收货地址";
        addressData.value = JSON.parse(option.data);
      }
      manageType.value = option.type;
      common_vendor.index.setNavigationBarTitle({
        title
      });
    });
    const switchChange = (e) => {
      console.log(e.detail.value);
      addressData.value.moren = e.detail.value;
    };
    const chooseLocation = async () => {
      common_vendor.index.chooseLocation({
        success: (data) => {
          console.log(data);
          addressData.value.shaddress = data.address;
          addressData.value.xxaddress = data.name;
        }
      });
    };
    const confirm = async () => {
      let data = addressData.value;
      data.moren = addressData.value.moren ? 1 : 0;
      data.loginid = common_vendor.index.getStorageSync("userInfo").id;
      if (!data.shname) {
        msgBox("请填写收货人姓名");
        return;
      }
      if (!/(^1[3|4|5|7|8][0-9]{9}$)/.test(data.shphone)) {
        msgBox("请输入正确的手机号码");
        return;
      }
      if (!data.shaddress) {
        msgBox("请在地图选择所在位置");
        return;
      }
      if (!data.xxaddress) {
        msgBox("请填写详细地址");
        return;
      }
      if (this.manageType == "edit") {
        await common_vendor.index.$api.xiugai(data);
      } else {
        await common_vendor.index.$api.xinaddress(data);
      }
      msgBox(`地址${this.manageType == "edit" ? "修改" : "添加"}成功`);
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 800);
    };
    const msgBox = (text) => {
      common_vendor.index.showToast({
        title: text,
        icon: "none"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: addressData.value.name,
        b: common_vendor.o(($event) => addressData.value.name = $event.detail.value),
        c: addressData.value.mobile,
        d: common_vendor.o(($event) => addressData.value.mobile = $event.detail.value),
        e: common_vendor.t(addressData.value.address),
        f: common_vendor.o(chooseLocation),
        g: addressData.value.addressName,
        h: common_vendor.o(($event) => addressData.value.addressName = $event.detail.value),
        i: addressData.value.moren == "1",
        j: common_vendor.o(switchChange),
        k: common_vendor.o(confirm)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/user/pages/addressManage/addressManage.vue"]]);
wx.createPage(MiniProgramPage);
