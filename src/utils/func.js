/*
 * @Description:
 * @Author: wuwei
 * @Date: 2020-11-15 16:21:58
 */

/**
 * @description: 判断是不是json
 * @param {*} str
 */
export function isJson(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}
