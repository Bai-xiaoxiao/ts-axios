const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");

// 防止版本号重复
const arr = fs.readdirSync("./dist");
const version = "0.0.1";
const isProduction = process.env.NODE_ENV === "production";
if (arr.includes(version) && isProduction) {
  console.log("err：已存在当前版本号");
  // 关闭进程
  process.exit();
}

module.exports = {
  mode: isProduction ? "production" : "development",
  entry: "./src/index",
  output: {
    // filename: "index.[hash].js",
    filename: "index.js",
    path: path.resolve(__dirname, `dist/${version}`),
    // clean: true,
    library: "axios",
    libraryTarget: "umd",
    // 关闭之后yr会多一个default属性
    // 如果开启plugin-transform-modules-umd则需要去掉这个
    libraryExport: "default",
    // 禁用生成箭头函数
    // environment: {
    //   arrowFunction: false,
    // },
  },
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "index.dev.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      { test: /\.ts$/, exclude: /node_modules/, use: ["ts-loader"] },
    ],
  },
  //配置模块化引入文件的缺省类型
  resolve: {
    extensions: [".js", ".ts"],
  },
};
