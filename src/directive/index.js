/*
 * @Description: 注册指令
 * @Author: wuwei
 * @Date: 2020-11-18 17:24:05
 */

const install = Vue => {
  const modulesFiles = require.context("./lib", false, /\.js$/);
  modulesFiles.keys().forEach(modulePath => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
    const value = modulesFiles(modulePath);
    Vue.directive(moduleName, value.default);
  });
};

export default {
  install,
};
