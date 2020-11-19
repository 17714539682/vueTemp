/*
 * @Description:
 * @Author: wuwei
 * @Date: 2020-11-18 17:24:05
 */
import permission from "./permission";

const install = Vue => {
  Vue.directive("permission", permission);
};

export default {
  install,
};
