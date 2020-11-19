/*
 * @Description: 组件库
 * @Author: wuwei
 * @Date: 2020-11-17 21:32:12
 */
import Icon from "@/components/Common/icon";

function globalComponent(Vue) {
  Vue.component(Icon.name, Icon);
}

export default globalComponent;
