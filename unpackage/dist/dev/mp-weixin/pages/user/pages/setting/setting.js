"use strict";
const common_vendor = require("../../../../common/vendor.js");
const config_globalConfig = require("../../../../config/global-config.js");
if (!Array) {
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  _easycom_uni_data_checkbox2();
}
const _easycom_uni_data_checkbox = () => "../../../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
if (!Math) {
  _easycom_uni_data_checkbox();
}
const _sfc_main = {
  __name: "setting",
  setup(__props) {
    const oneYear = common_vendor.ref(true);
    const message = common_vendor.ref({});
    const defaultAvatarUrl = common_vendor.ref("/static/nologin.png");
    const sexsValue = common_vendor.ref("");
    const date = common_vendor.ref("");
    const sexs = common_vendor.ref([{
      text: "男",
      value: "1"
    }, {
      text: "女",
      value: "2"
    }]);
    common_vendor.onShow(() => {
      message.value = common_vendor.index.getStorageSync("userInfo");
      gapYeay();
      if (message.value.sex) {
        sexsValue.value = message.value.sex;
      }
      if (message.value.age) {
        date.value = message.value.age.split("T")[0];
      }
    });
    const submit = async () => {
      if (!oneYear.value && message.value.updatetime) {
        if (date.value != message.value.age.split("T")[0]) {
          return common_vendor.index.showToast({
            title: "一年只能能修改出生日期一次",
            icon: "none"
          });
        }
      }
      let data = {
        "nickname": message.value.nickname,
        //昵称
        "headsculpture": message.value.headsculpture,
        //头像
        "id": message.value.id,
        "sex": sexsValue.value,
        //性别 1 男 2 女
        "age": date.value
        //出生年月日
      };
      try {
        const res = await common_vendor.index.$api.auth(data);
        common_vendor.index.setStorageSync("userInfo", res.data);
        common_vendor.index.showToast({
          title: "修改成功"
        });
      } catch (e) {
      }
    };
    const bindDateChange = (e) => {
      if (oneYear.value) {
        date.valuee = e.target.value;
      } else {
        common_vendor.index.showToast({
          title: "一年只能修改一次出生日期",
          icon: "none"
        });
      }
    };
    const getName = (e) => {
      console.log("1", e.detail.value);
      message.value.nickname = e.detail.value;
    };
    const onChooseAvatar = (e) => {
      console.log(e);
      const {
        avatarUrl
      } = e.detail;
      uploadImg(avatarUrl);
    };
    const uploadImg = (path) => {
      common_vendor.index.uploadFile({
        // url: `https://xzds.junmeinongye.com/api/pgz-api/common/upload`,
        url: config_globalConfig.uploadUrl,
        filePath: path,
        name: "file",
        success: (res) => {
          let newRes = JSON.parse(res.data);
          console.log(newRes);
          if (newRes.code == "200") {
            common_vendor.index.showToast({
              title: "上传成功"
            });
            message.value.headsculpture = newRes.url;
          } else {
            common_vendor.index.showToast({
              title: "网络异常，稍后再试"
            });
          }
        }
      });
    };
    const gapYeay = () => {
      let targetDate = new Date(message.value.updatetime);
      let now = /* @__PURE__ */ new Date();
      let diff = now.getTime() - targetDate.getTime();
      let oneYearMs = 1e3 * 60 * 60 * 24 * 365;
      console.log(diff, oneYearMs, targetDate, now);
      if (diff > oneYearMs) {
        console.log("当前时间离目标时间超过一年");
        oneYear.value = true;
      } else {
        console.log("当前时间离目标时间不超过一年");
        oneYear.value = false;
      }
    };
    return (_ctx, _cache) => {
      return {
        a: message.value.headsculpture || defaultAvatarUrl.value,
        b: common_vendor.o(onChooseAvatar),
        c: common_vendor.o(getName),
        d: message.value.nickname,
        e: common_vendor.o(($event) => message.value.nickname = $event.detail.value),
        f: common_vendor.t(message.value.phone || "暂无"),
        g: common_vendor.o(($event) => sexsValue.value = $event),
        h: common_vendor.p({
          selectedColor: "#5BC267",
          selectedTextColor: "#5BC267",
          localdata: sexs.value,
          modelValue: sexsValue.value
        }),
        i: common_vendor.t(date.value ? date.value : "选择日期"),
        j: date.value,
        k: _ctx.startDate,
        l: _ctx.endDate,
        m: common_vendor.o(bindDateChange),
        n: common_vendor.o(submit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/user/pages/setting/setting.vue"]]);
wx.createPage(MiniProgramPage);
