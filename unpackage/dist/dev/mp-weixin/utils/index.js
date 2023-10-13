"use strict";
const common_vendor = require("../common/vendor.js");
const toFixed = (num, point = 2) => {
  var endNum = parseInt(num * Math.pow(10, point + 1)) % 10;
  if (endNum <= 4) {
    return parseInt(num * Math.pow(10, point)) / Math.pow(10, point);
  } else {
    return (parseInt(num * Math.pow(10, point)) + 1) / Math.pow(10, point);
  }
};
common_vendor.index.$toFixed = toFixed;
