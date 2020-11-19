/*
 * @Description:自定义操作权限指令
 * @Author: wuwei
 * @Date: 2020-11-17 21:32:12
 */
import store from "@/store";

// 当前用户权限
const roles = store.getters.authority;

function checkPermission(el, binding) {
  const {
    value: { type, auth },
  } = binding;
  if (auth && auth instanceof Array) {
    if (auth.length > 0) {
      const hasPermission = roles[type]?.some(role => auth.includes(role));
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  } else {
    throw new Error("权限缺失, v-permission=\"['save']\"");
  }
}

export default {
  inserted(el, binding) {
    checkPermission(el, binding);
  },
  update(el, binding) {
    checkPermission(el, binding);
  },
};
