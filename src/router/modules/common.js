/*
 * @Description:
 * @Author: wuwei
 * @Date: 2020-11-20 15:40:36
 */

export default [
  {
    path: "/dashboard",
    name: "dashboard",
    meta: { title: "首页" },
    component: () => import(/* webpackChunkName: "dashboard" */ "@/views/dashboard.vue"),
  },
  {
    path: "/help",
    name: "help",
    meta: { title: "帮助中心" },
    component: () => import(/* webpackChunkName: "help" */ "@/views/help.vue"),
  },
  {
    path: "/about",
    name: "about",
    meta: { title: "关于我们" },
    component: () => import(/* webpackChunkName: "about" */ "@/views/about.vue"),
  },
  {
    path: "/demo/a",
    name: "a",
    meta: { title: "demoa" },
    component: () => import(/* webpackChunkName: "demoa" */ "@/views/demo/a.vue"),
  },
  {
    path: "/demo/b",
    name: "b",
    meta: { title: "demob" },
    component: () => import(/* webpackChunkName: "demob" */ "@/views/demo/b.vue"),
  },
];
