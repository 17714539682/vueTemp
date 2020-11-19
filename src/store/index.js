/*
 * @Description:
 * @Date: 2020-09-08 10:01:50
 * @Author: wuwei
 */
import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import getters from "./getters";

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
  reducer: state => {
    const { global } = state;
    return {
      global,
    };
  },
});

const modulesFiles = require.context("./modules", true, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
  getters,
  plugins: [vuexLocal.plugin],
});

export default store;
