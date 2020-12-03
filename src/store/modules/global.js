/*
 * @Description:
 * @Author: wuwei
 * @Date: 2020-11-15 21:57:47
 */
import _ from "lodash";

const state = {
  title: "首页",
  // 全局请求记录数据
  requests: [],
};

const mutations = {
  // 设置网页title
  setTitle: (state, data) => {
    state.title = data;
  },
  setRequest: (state, data) => {
    state.requests = data;
  },
  clearRequest: state => {
    state.requests.forEach((cancel = _.noop) => {
      cancel();
    });
    state.requests = [];
  },
};

const actions = {
  setRequestAction({ commit }, data) {
    commit("setRequest", data);
  },
  clearRequestAction({ commit }, data) {
    commit("clearRequest", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
