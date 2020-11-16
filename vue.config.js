("use strict");
const config = require("./src/config");
const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];

function resolve(dir) {
  return path.join(__dirname, dir);
}
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  lintOnSave: true, //直接关闭eslint检查
  publicPath: isProduction ? "./" : "/",
  outputDir: "./dist",
  assetsDir: "static",
  productionSourceMap: false, // 生产环境的 source map
  devServer: {
    open: true, // 是否打开浏览器;
    hotOnly: true, // 是否热更新;
    port: 8000,
    proxy: {
      [config.apiPrefix]: {
        target: process.env.API_BASE_URL,
        changeOrigin: true, // 开启代理
        ws: false, // 是否启用  websockets;
        pathRewrite: {
          [`^${config.apiPrefix}`]: config.apiPrefix
        }
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        "@ant-design/icons/lib/dist$": resolve("./src/assets/antd/icons.js") //按需引入antd的icon
      }
    },
    plugins: [
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]", // 提示compression-webpack-plugin@3.0.0的话asset改为filename
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"), // 匹配文件名
        threshold: 0, // 对超过0k的文件压缩
        minRatio: 0.8 // 对压缩率小于这个值的资源进行处理
      })
    ],
    externals: isProduction
      ? {
          // vue: "Vue",
          // vuex: "Vuex",
          // "vue-router": "VueRouter",
          // "vue-meta": "VueMeta",
          // "ant-design-vue": "AntDesignVue",
          // axios: "axios",
          // moment: "moment",
          // lodash: "lodash"
        }
      : {}
  },
  chainWebpack: config => {
    if (isProduction) {
      config.plugin("html").tap(args => {
        args[0].mode = "product";
        return args;
      });
    }
    config.module
      .rule("less")
      .oneOf("vue")
      .use("style-resource")
      .loader("style-resources-loader")
      .options({
        patterns: [
          path.resolve(__dirname, "./src/assets/css/reset.less"),
          path.resolve(__dirname, "./src/assets/css/base.less")
        ]
      });
  }
};
