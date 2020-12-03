import router from "@/router";
import store from "@/store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import _ from "lodash";
import { Message } from "ant-design-vue";

// 免登录
const whitePath = ["/login", "/register", "/agreement"];

router.beforeEach((to, from, next) => {
  NProgress.start();
  const { empInfo } = store.state.user;
  if (!whitePath.includes(to.path) && _.isEmpty(empInfo)) {
    next("/login");
    Message.warning("请先登录");
  } else {
    store.commit("global/setTitle", to.meta.title || "");
    next();
  }
  NProgress.done();
});
