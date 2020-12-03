/*
 * @Description: 用户模块api
 * @Author: wuwei
 * @Date: 2020-11-24 14:33:20
 */

import Http from "@/utils/http";

// 登录
export async function login(data) {
  return Http.post("/oauth/token", data);
}

// 注册
export async function register(data) {
  return Http.post("/oauth/token", data);
}

// 查询用户信息
export async function queryEmpInfo(data) {
  return Http.get("/user/me", data);
}

// 修改用户信息
export async function updateEmpInfo(data) {
  return Http.get("/user/me", data);
}

// 找回密码
export async function login1(data) {
  return Http.post("/oauth/token", data);
}

// 修改密码
export async function register1(data) {
  return Http.post("/oauth/token", data);
}
