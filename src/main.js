/*
 * @Description:
 * @Author: wuwei
 * @Date: 2020-11-14 08:53:37
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./router/routerGuard";
import store from "./store";
import Meta from "vue-meta";
import globalComponent from "@/plugin/globalComponent";
import "@/assets/iconfont";
import config from "@/config";
import { Button, Layout, Menu, Icon } from "ant-design-vue";
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(Meta);

Vue.use(globalComponent);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // 页面title
  metaInfo() {
    return {
      title: config.systemName,
    };
  },
  render: h => h(App),
}).$mount("#app");
