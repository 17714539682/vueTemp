/*
 * @Description:
 * @Author: wuwei
 * @Date: 2020-11-15 16:19:28
 */

export default [
  {
    path: "/",
    name: "layout",
    redirect: "/home",
    component: () => import("@/views/layout/index.vue"),
    children: [
      {
        path: "/about",
        name: "About",
        meta: { title: "关于" },
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/home",
        name: "Home",
        meta: { title: "首页" },
        component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
      },
    ],
  },
];
