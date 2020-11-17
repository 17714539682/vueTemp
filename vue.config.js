("use strict");
const config = require("./src/config");
const path = require("path");
const webpack = require("webpack");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];

function resolve(dir) {
  return path.join(__dirname, dir);
}
const isProduction = process.env.NODE_ENV === "production";
const { port, apiPrefix, API_DEV } = config;

module.exports = {
  lintOnSave: true, //直接关闭eslint检查
  publicPath: isProduction ? "./" : "/",
  outputDir: `./dist`,
  assetsDir: "static",
  filenameHashing: true, // 默认在生成的静态资源文件名中包含hash以控制缓存
  productionSourceMap: false, // 生产环境的 source map
  devServer: {
    open: true, // 是否打开浏览器;
    hotOnly: true, // 是否热更新;
    port: port,
    proxy: {
      [apiPrefix]: {
        target: API_DEV,
        changeOrigin: true, // 开启代理
        ws: false, // 是否启用  websockets;
        pathRewrite: {
          [`^${apiPrefix}`]: "",
        },
      },
    },
  },
  // antd引入报错解决
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        // "@ant-design/icons/lib/dist$": resolve("./src/assets/antd/icons.js"), //按需引入antd的icon
      },
    },
    plugins: [
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]", // 提示compression-webpack-plugin@3.0.0的话asset改为filename
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"), // 匹配文件名
        threshold: 0, // 对超过0k的文件压缩
        minRatio: 0.8, // 对压缩率小于这个值的资源进行处理
      }),
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
      : {},
  },
  chainWebpack: config => {
    const cdn = {
      // css: ["//unpkg.com/ant-design-vue@1.7.2/dist/antd.min.css"],
      // js: [
      //   "//unpkg.com/vue@2.6.10/dist/vue.min.js",
      //   "//unpkg.com/vue-router@3.0.6/dist/vue-router.min.js",
      //   "//unpkg.com/vuex@3.1.1/dist/vuex.min.js",
      //   "//unpkg.com/axios@0.19.0/dist/axios.min.js",
      //   "//unpkg.com/ant-design-vue@1.7.2/lib/index.js",
      // ],
    };
    if (isProduction) {
      config.plugin("html").tap(args => {
        args[0].mode = "product";
        args[0].cdn = cdn;
        return args;
      });
    }
    // 删除 moment 除 zh-cn 中文包外的其它语言包，无需在代码中手动引入 zh-cn 语言包
    config
      .plugin("ignore")
      .use(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn$/));
    // 引入全局less文件
    config.module
      .rule("less")
      .oneOf("vue")
      .use("style-resource")
      .loader("style-resources-loader")
      .options({
        patterns: [
          path.resolve(__dirname, "./src/assets/css/reset.less"),
          path.resolve(__dirname, "./src/assets/css/base.less"),
        ],
      });
  },
};
