/*
 * @Description:
 * @Author: wuwei
 * @Date: 2020-11-15 21:57:47
 */
import api from "@/api";
import router from "@/router";
import { delCookie } from "@/utils/cookie";

const state = {
  // 用户token
  token: "Basic dXNlci1jbGllbnQ6dXNlci1zZWNyZXQtODg4OA==",
  // 用户信息
  empInfo: {},
};

const mutations = {
  // 设置token
  setToken: (state, data) => {
    const { token_type, access_token } = data;
    state.token = `${token_type} ${access_token}`;
  },
  // 设置用户信息
  setEmpInfo: (state, data) => {
    state.empInfo = data;
    console.log(state);
  },
};

const actions = {
  // 登录
  async login({ commit, dispatch }, data) {
    const res = await api.userApi.login(data);
    commit("setToken", res);
    await dispatch("queryEmpInfo");
    router.push("/");
  },
  // 退出登录
  async loginOut({ commit }) {
    const res = { token_type: "Basic", access_token: "dXNlci1jbGllbnQ6dXNlci1zZWNyZXQtODg4OA==" };
    commit("setToken", res);
    commit("setEmpInfo", {});
    console.log(111);
    delCookie("username");
    delCookie("password");
    router.push("/login");
  },
  // 注册
  async register(context, data) {
    const res = await api.userApi.register(data);
    return res;
  },
  // 获取用户信息
  async queryEmpInfo({ commit }, data) {
    const res = await api.userApi.queryEmpInfo(data);
    commit("setEmpInfo", res);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
