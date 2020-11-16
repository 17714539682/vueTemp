/*
 * @Description: 全局http请求处理
 * @Author: wuwei
 * @Date: 2020-06-17 18:12:31
 */
import axios from "axios";
import { Modal, Message } from "ant-design-vue";
let showLogin = false;

const api = axios.create({
  // 请求前缀
  baseURL: "",
  // 超时时间
  timeout: 15000,
  // 响应类型
  responseType: "json",
  // 发送请求时需带上cookie
  withCredentials: true,
  // 请求头
  headers: { "iv-user": "007306" }
});

const getRequestIdentify = config => {
  return config.method === "get"
    ? config.url +
        (typeof config.params === "object"
          ? JSON.stringify(config.params)
          : config.params)
    : config.url +
        (typeof config.data === "object"
          ? JSON.stringify(config.data)
          : config.data);
};

const pending = [];
const cancelPending = (key, isRequest = false) => {
  // 每次发起请求的时候，判断之前有没有在pending的相同请求，如果有就取消在pending的请求
  if (pending[key] && isRequest) {
    pending[key]();
  }
  // 从队列里删除上一次的重复请求记录
  delete pending[key];
};

// 拦截请求
api.interceptors.request.use(config => {
  const requestData = getRequestIdentify(config);
  // 拦截重复请求(即当前正在pending的相同请求)
  cancelPending(requestData, true);
  // 数据格式
  config.headers.Accept = "application/json;";
  // 每一个请求new一个token，然后存入状态中
  // config.cancelToken = new axios.CancelToken(cancel => {
  // const { requests } = store.getState().global;
  // store.dispatch({
  //   type: "global/setRequestAction",
  //   payload: [cancel].concat(requests)
  // });
  // pending.push({ requestData: cancel });
  // pending[requestData] = cancel;
  // });
  return config;
});

// 拦截响应
api.interceptors.response.use(
  response => {
    // 把已经完成的请求从 pending 中移除
    const requestData = getRequestIdentify(response.config);
    cancelPending(requestData);
    if (response.status === 200) {
      const { data } = response;
      // 判断返回状态
      if (!showLogin && data.code === "403") {
        showLogin = true;
        Modal.confirm("登录超时");
      } else if (parseInt(data.code, 10) !== 0) {
        Message.error("请求服务错误");
        return Promise.reject(data);
      }
      return Promise.resolve(data);
    }
    Message.error("服务错误");
    return Promise.reject(response);
  },
  error => {
    if (axios.isCancel(error)) {
      // 取消请求的情况下，终止Promise调用链
      return new Promise(() => {});
    }
    Message.error("网络错误");
    return Promise.reject(error);
  }
);

export default class Http {
  static get(url, params, config = {}) {
    return new Promise((resolve, reject) => {
      api
        .get(
          url,
          {
            params: {
              ...params,
              _: Math.random()
            }
          },
          config
        )
        .then(res => {
          resolve(res.data || res.resultData);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static post(url, params, config = {}) {
    return new Promise((resolve, reject) => {
      api
        .post(
          url,
          {
            ...params
          },
          config
        )
        .then(res => {
          resolve(res.data || res.resultData);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
