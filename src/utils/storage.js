/*
 * @Description:
 * @Author: wuwei
 * @Date: 2020-11-17 21:32:12
 */
import { isJson } from "@/utils/func";

// sessionStorage
export const session = {
  get(key) {
    const result = sessionStorage.getItem(key);
    return isJson(result) ? JSON.parse(result) || result : result;
  },
  set(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    sessionStorage.removeItem(key);
  },
  clear() {
    sessionStorage.clear();
  },
};

// localStorage
export const storage = {
  get(key) {
    const result = localStorage.getItem(key);
    return isJson(result) ? JSON.parse(result) || result : result;
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};
