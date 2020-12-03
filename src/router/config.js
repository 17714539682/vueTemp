/*
 * @Description:
 * @Author: wuwei
 * @Date: 2020-11-15 16:19:28
 */
const modulesFiles = require.context("./modules", false, /\.js$/);
const modulesRoute = modulesFiles.keys().reduce((target, modulePath) => {
  const value = modulesFiles(modulePath);
  target.concat(value.default);
  return target.concat(value.default);
}, []);
// not have permission
export const constantRoutes = [
  {
    path: "/login",
    name: "login",
    meta: { title: "登录" },
    component: () => import(/* webpackChunkName: "login" */ "@/views/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: { title: "注册", keepAlive: true },
    component: () => import(/* webpackChunkName: "register" */ "@/views/register.vue"),
  },
  {
    path: "/agreement",
    name: "agreement",
    meta: { title: "用户协议" },
    component: () => import(/* webpackChunkName: "agreement" */ "@/views/agreement.vue"),
  },
  {
    path: "/403",
    name: "403",
    component: () => 403,
  },
  {
    path: "/404",
    name: 404,
    component: () => "404",
  },
];

// have permission
export const asyncRoutes = [
  {
    path: "/",
    name: "layout",
    redirect: "/dashboard",
    component: () => import("@/views/layout/index.vue"),
    children: modulesRoute,
  },
  { path: "*", redirect: "/404" },
];

export default [...constantRoutes, ...asyncRoutes];
