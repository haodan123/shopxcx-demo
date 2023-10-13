"use strict";
const common_vendor = require("../../common/vendor.js");
common_vendor.defineStore("useUser", () => {
  const user = common_vendor.ref();
  const setUser = (val) => {
    user.value = val;
  };
  const clearUser = () => {
    user.value = null;
  };
  return {
    user,
    setUser,
    clearUser
  };
}, {
  persist: {
    storage: {
      getItem(key) {
        return common_vendor.index.getStorageSync(key);
      },
      setItem(key, value) {
        common_vendor.index.setStorageSync(key, value);
      }
    }
  }
});
