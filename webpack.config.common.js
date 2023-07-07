const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssLoader = require("css-loader");

module.exports = {
  entry: {
    main: "./assets/static/js/main.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "docs/static/js"),
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, CssLoader],
      },
    ],
  },
};
