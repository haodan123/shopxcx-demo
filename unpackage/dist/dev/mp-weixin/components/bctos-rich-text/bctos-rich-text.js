"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "bctos-rich-text",
  props: {
    nodes: {},
    width: {
      type: String,
      default: "100%"
    }
  },
  setup(__props) {
    const props = __props;
    const contentArr = common_vendor.ref([]);
    const videoArr = common_vendor.ref([]);
    common_vendor.watch(() => props.nodes, () => {
      parseVideo();
    });
    common_vendor.onShow(() => {
      parseVideo();
    });
    const parseVideo = () => {
      if (typeof props.nodes != "string") {
        contentArr.value[0] = props.nodes;
        videoArr.value[0] = null;
        return false;
      }
      let nodes = props.nodes.replace(/\<img/g, '<img style="max-width:98%!important;height:auto;"');
      let arr = nodes.split("</video>");
      let reg = /<video([\s\S]*)/g;
      for (let i in arr) {
        var item = arr[i];
        var urlMatch = item.match(/<video[\s\S]*src=\"(.*?)\"/);
        if (urlMatch && urlMatch.length > 1) {
          videoArr.value[i] = urlMatch[1];
        } else {
          videoArr.value[i] = null;
        }
        contentArr.value[i] = item.replace(reg, "");
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(contentArr.value, (content, index, i0) => {
          return common_vendor.e({
            a: content,
            b: videoArr.value[index] !== null
          }, videoArr.value[index] !== null ? {
            c: videoArr.value[index],
            d: __props.width
          } : {}, {
            e: index
          });
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/未命名文件夹/达州/dzdsxcx/components/bctos-rich-text/bctos-rich-text.vue"]]);
wx.createComponent(Component);
