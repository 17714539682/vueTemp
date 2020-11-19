/*
 * @Description:
 * @Author: wuwei
 * @Date: 2020-11-14 08:53:37
 */

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./config";
import { systemName } from "@/settings";

//拦截导航重复点击报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: `/${systemName}/`,
  routes,
  // 加载路由后滚动位置
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.hash) {
        return { selector: to.hash };
      } else {
        return { x: 0, y: 0 };
      }
    }
  },
});

export default router;
