"use strict";
var _a, _b;
const common_vendor = require("../../../../common/vendor.js");
const props = {
  props: {
    // 指示器的整体宽度
    indicatorWidth: {
      type: [String, Number],
      default: 50
    },
    // 滑块的宽度
    indicatorBarWidth: {
      type: [String, Number],
      default: 20
    },
    // 是否显示面板指示器
    indicator: {
      type: Boolean,
      default: true
    },
    // 指示器非激活颜色
    indicatorColor: {
      type: String,
      default: "#f2f2f2"
    },
    // 指示器的激活颜色
    indicatorActiveColor: {
      type: String,
      default: "#3c9cff"
    },
    // 指示器样式，可通过bottom，left，right进行定位
    indicatorStyle: {
      type: [String, Object],
      default: ""
    },
    ...(_b = (_a = common_vendor.index.$uv) == null ? void 0 : _a.props) == null ? void 0 : _b.scrollList
  }
};
exports.props = props;
