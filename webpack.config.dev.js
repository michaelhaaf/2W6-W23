const path = require("path");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "docs"),
    compress: true,
    port: 8080,
    open: true,
  },
});
