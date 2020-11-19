/*
 * @Description: 公共组件库
 * @Author: wuwei
 * @Date: 2020-11-17 21:32:12
 */
import Icon from "@/components/Common/Icon";

function globalComponent(Vue) {
  Vue.component(`w-${Icon.name}`, Icon);
}

export default globalComponent;
