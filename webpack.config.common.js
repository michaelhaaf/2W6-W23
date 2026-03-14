const path = require("path");

module.exports = {
  entry: {
    main: "./assets/static/js/main.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "docs/static/js"),
  },
};
