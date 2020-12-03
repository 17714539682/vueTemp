/*
 * @Description: 公共模块api
 * @Author: wuwei
 * @Date: 2020-11-24 14:33:20
 */

import Http from "@/utils/http";

// 图形验证码
export async function login2(data) {
  return Http.post("/oauth/token", data);
}

// 短信验证码
export async function register2(data) {
  return Http.post("/oauth/token", data);
}
