module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "indent": 'off',
    "eqeqeq": 2,
    "prefer-const": "error",
    "arrow-parens": [0],
     // 不允许使用带有下划线的属性
     "no-underscore-dangle": ["error", { "allow": ["dvaApp", "_store"] }],
     // 不允许使用一元运算符 ++ 或 -- 等
     "no-plusplus": [0],
     // 不允许出现console
     "no-console": [1],
     // class的方法中必须使用this,
     "class-methods-use-this": [0],
     // 如果模块只有一个导出项时必须使用default
     "import/prefer-default-export": [0],
     // 禁止引入无法解析的模块路径（项目中使用 @/ 别名时会报这条错误）
     "import/no-unresolved": [0],
     // 导入的扩展名必须一致，使用import 'xx.js'时会触发这条错误
     "import/extensions": [0],
     // 箭头函数的函数体不能换行（与prettier冲突）
     "implicit-arrow-linebreak": [0],
  }
};
