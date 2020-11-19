/*
 * @Description: ant-design-vue按需引入
 * @Author: wuwei
 * @Date: 2020-11-19 10:27:26
 */
import Vue from "vue";
import { Button, Layout, Menu, Icon, Message } from "ant-design-vue";

// message全局配置
Message.config({
  top: "12px",
  duration: 2,
  maxCount: 3,
});

Vue.prototype.$message = Message;

Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Button);
