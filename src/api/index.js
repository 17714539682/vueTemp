/*
 * @Description:
 * @Author: wuwei
 * @Date: 2020-11-27 09:43:02
 */

const modulesFiles = require.context("./modules", false, /\.js$/);
const modules = modulesFiles.keys().reduce((target, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  target[`${moduleName}Api`] = value;
  return target;
}, {});

export default {
  ...modules,
};
