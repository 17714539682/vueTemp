/*
 * @Description:
 * @Author: wuwei
 * @Date: 2020-11-15 21:57:47
 */
import { apiUser } from "@/api/module1/common";

const state = {
  token: ""
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  }
};

const actions = {
  // 注册
  registe({ commit }, data) {
    return new Promise((resolve, reject) => {
      apiUser
        .registe(data)
        .then(res => {
          commit("SET_TOKEN", res);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
