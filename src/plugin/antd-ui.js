/*
 * @Description: ant-design-vue按需引入
 * @Author: wuwei
 * @Date: 2020-11-19 10:27:26
 */
import Vue from "vue";
import {
  Button,
  Icon,
  Layout,
  Radio,
  Row,
  Col,
  Space,
  Pagination,
  Menu,
  AutoComplete,
  Input,
  InputNumber,
  DatePicker,
  TreeSelect,
  Select,
  Switch,
  Checkbox,
  Form,
  Message,
  Modal,
  Popconfirm,
  Dropdown,
  Empty,
  Spin,
  Table,
  Tabs,
  Tag,
  Tooltip,
  Popover,
  Avatar,
  Alert,
  Tree,
  Breadcrumb,
  ConfigProvider,
} from "ant-design-vue";

// message全局配置
Message.config({
  top: "12px",
  duration: 2,
  maxCount: 3,
});

Vue.prototype.$message = Message;
Vue.use(ConfigProvider);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Radio);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
Vue.use(Space);
Vue.use(Form);
Vue.use(Pagination);
Vue.use(AutoComplete);
Vue.use(InputNumber);
Vue.use(DatePicker);
Vue.use(Select);
Vue.use(Switch);
Vue.use(Modal);
Vue.use(Popconfirm);
Vue.use(Empty);
Vue.use(Spin);
Vue.use(Tag);
Vue.use(Tabs);
Vue.use(Table);
Vue.use(Tree);
Vue.use(Popover);
Vue.use(Avatar);
Vue.use(Tooltip);
Vue.use(Dropdown);
Vue.use(Breadcrumb);
Vue.use(TreeSelect);
Vue.use(Alert);
