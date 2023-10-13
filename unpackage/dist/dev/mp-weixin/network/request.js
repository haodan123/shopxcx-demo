"use strict";
const common_vendor = require("../common/vendor.js");
const config_globalConfig = require("../config/global-config.js");
const $request = (url, data, method = "POST", headers = "application/json;") => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      // url: 'http://192.168.0.101:9096'+url,
      url: config_globalConfig.apiUrl + url,
      method,
      data,
      header: {
        "Content-Type": headers
      },
      success({
        data: data2
      }) {
        if (data2.code !== 500) {
          resolve(data2);
        } else {
          common_vendor.index.showToast({
            icon: "none",
            title: data2.msg || "请求错误"
          });
          reject(data2);
        }
      },
      fail(error) {
        common_vendor.index.showToast({
          icon: "none",
          title: "网络错误，换个网络试试"
        });
        reject(error);
      },
      complete() {
        common_vendor.index.hideLoading();
      }
    });
  });
};
const $get = (url, data) => {
  return $request(url, data, "GET");
};
const $post = (url, data) => {
  return $request(url, data, "POST");
};
common_vendor.index.$get = $get;
common_vendor.index.$post = $post;
