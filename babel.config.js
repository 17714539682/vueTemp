module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    ["@babel/plugin-proposal-optional-chaining"], // 可选链 ?.
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: "css" }, // antd 按需引入
    ],
  ],
};
