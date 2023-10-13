"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_uni_data_checkbox2 + _easycom_uni_forms_item2 + _easycom_uni_easyinput2 + _easycom_uni_forms2 + _easycom_uv_button2)();
}
const _easycom_uni_data_checkbox = () => "../../../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_forms_item = () => "../../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_easyinput = () => "../../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms = () => "../../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uv_button = () => "../../../../uni_modules/uv-button/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uni_data_checkbox + _easycom_uni_forms_item + _easycom_uni_easyinput + _easycom_uni_forms + _easycom_uv_button)();
}
const _sfc_main = {
  __name: "taitouAdd",
  setup(__props) {
    const form = common_vendor.ref(null);
    const formdata = common_vendor.ref({
      type: 0,
      //抬头类型
      gsname: "",
      //公司名称
      gssh: "",
      //公司税号
      address: "",
      //公司地址
      gsphone: "",
      //公司电话
      khh: "",
      //开户行
      khhzh: "",
      //开户行账号
      money: "",
      //金额
      email: "",
      //电子邮箱
      phone: "",
      //联系电话
      fptt: "",
      //发票抬头
      grsh: "",
      //税号
      khyh: "",
      //开户银行
      yhzh: "",
      //银行账号
      qyaddress: "",
      //企业地址
      qyphone: ""
      //企业电话
    });
    const radioArr = common_vendor.ref([{
      text: "企业单位",
      value: 0
    }, {
      text: "个人/非企业单位",
      value: 1
    }]);
    const rules = common_vendor.ref({
      gsname: {
        rules: [{
          required: true,
          errorMessage: "请输入公司名称"
        }]
      },
      gssh: {
        rules: [{
          required: true,
          errorMessage: "请输入公司税号"
        }]
      },
      email: {
        rules: [{
          required: true,
          errorMessage: "请输入电子邮箱"
        }]
      },
      phone: {
        rules: [{
          required: true,
          errorMessage: "请输入联系方式"
        }]
      }
    });
    const submit = async () => {
      try {
        await form.value.validate();
      } catch (e) {
        console.log(e);
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => formdata.value.type = $event),
        b: common_vendor.p({
          selectedColor: "#76C071",
          localdata: radioArr.value,
          modelValue: formdata.value.type
        }),
        c: common_vendor.p({
          label: "抬头类型:",
          name: "code",
          required: ""
        }),
        d: formdata.value.type == 0
      }, formdata.value.type == 0 ? {
        e: common_vendor.o(($event) => formdata.value.gsname = $event),
        f: common_vendor.p({
          placeholder: "请输入公司名称",
          modelValue: formdata.value.gsname
        }),
        g: common_vendor.p({
          label: "公司名称:",
          name: "gsname",
          required: ""
        }),
        h: common_vendor.o(($event) => formdata.value.gssh = $event),
        i: common_vendor.p({
          placeholder: "请输入公司税号",
          modelValue: formdata.value.gssh
        }),
        j: common_vendor.p({
          label: "公司税号:",
          name: "gssh",
          required: ""
        }),
        k: common_vendor.o(($event) => formdata.value.address = $event),
        l: common_vendor.p({
          placeholder: "请输入公司地址",
          modelValue: formdata.value.address
        }),
        m: common_vendor.p({
          label: "公司地址:"
        }),
        n: common_vendor.o(($event) => formdata.value.gsphone = $event),
        o: common_vendor.p({
          placeholder: "请输入公司电话",
          modelValue: formdata.value.gsphone
        }),
        p: common_vendor.p({
          label: "公司电话:"
        }),
        q: common_vendor.o(($event) => formdata.value.khh = $event),
        r: common_vendor.p({
          placeholder: "请输入开户行",
          modelValue: formdata.value.khh
        }),
        s: common_vendor.p({
          label: "开户行:"
        }),
        t: common_vendor.o(($event) => formdata.value.khhzh = $event),
        v: common_vendor.p({
          placeholder: "请输入开户行账号",
          modelValue: formdata.value.khhzh
        }),
        w: common_vendor.p({
          label: "开户行账号:"
        })
      } : {}, {
        x: formdata.value.type == 1
      }, formdata.value.type == 1 ? {
        y: common_vendor.o(($event) => formdata.value.fptt = $event),
        z: common_vendor.p({
          placeholder: "请输入发票抬头",
          modelValue: formdata.value.fptt
        }),
        A: common_vendor.p({
          label: "发票抬头:",
          name: "fptt",
          required: ""
        }),
        B: common_vendor.o(($event) => formdata.value.grsh = $event),
        C: common_vendor.p({
          placeholder: "请输入税号",
          modelValue: formdata.value.grsh
        }),
        D: common_vendor.p({
          label: "税号:",
          name: "grsh",
          required: ""
        }),
        E: common_vendor.o(($event) => formdata.value.khyh = $event),
        F: common_vendor.p({
          placeholder: "请输入开户银行",
          modelValue: formdata.value.khyh
        }),
        G: common_vendor.p({
          label: "开户银行:"
        }),
        H: common_vendor.o(($event) => formdata.value.yhzh = $event),
        I: common_vendor.p({
          placeholder: "请输入银行账号",
          modelValue: formdata.value.yhzh
        }),
        J: common_vendor.p({
          label: "银行账号:"
        }),
        K: common_vendor.o(($event) => formdata.value.qyaddress = $event),
        L: common_vendor.p({
          placeholder: "请输入企业地址",
          modelValue: formdata.value.qyaddress
        }),
        M: common_vendor.p({
          label: "企业地址:"
        }),
        N: common_vendor.o(($event) => formdata.value.qyphone = $event),
        O: common_vendor.p({
          placeholder: "请输入企业电话",
          modelValue: formdata.value.qyphone
        }),
        P: common_vendor.p({
          label: "企业电话:"
        })
      } : {}, {
        Q: common_vendor.o(($event) => formdata.value.money = $event),
        R: common_vendor.p({
          placeholder: "根据订单自动计算",
          disabled: true,
          modelValue: formdata.value.money
        }),
        S: common_vendor.p({
          label: "金额:",
          required: true
        }),
        T: common_vendor.o(($event) => formdata.value.email = $event),
        U: common_vendor.p({
          placeholder: "请输入电子邮箱",
          modelValue: formdata.value.email
        }),
        V: common_vendor.p({
          label: "电子邮箱:",
          name: "email",
          required: ""
        }),
        W: common_vendor.o(($event) => formdata.value.phone = $event),
        X: common_vendor.p({
          placeholder: "请输入联系电话",
          modelValue: formdata.value.phone
        }),
        Y: common_vendor.p({
          label: "联系电话:",
          name: "phone",
          required: true
        }),
        Z: common_vendor.sr(form, "38fc237e-0", {
          "k": "form"
        }),
        aa: common_vendor.p({
          model: formdata.value,
          rules: rules.value,
          labelPosition: "left",
          ["label-width"]: "80px"
        }),
        ab: common_vendor.o(submit),
        ac: common_vendor.p({
          type: "success",
          text: "保存"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-38fc237e"], ["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/pages/user/pages/taitouAdd/taitouAdd.vue"]]);
wx.createPage(MiniProgramPage);
