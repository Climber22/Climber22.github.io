const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./react/index.jsx",
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  devServer: {
    // path: path.join(__dirname, "/public"),
    publicPath: "/",
    filename: "public/bundle.js",
    watchContentBase: true
  },
  output: {
    path: path.join(__dirname, "/public"),
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-react"],
                ["@babel/preset-env", { useBuiltIns: "usage" }]
              ],
              plugins: ["@babel/plugin-proposal-class-properties"]
            }
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      { test: /\.jpg$/, loader: "file-loader?name=[path][name].[ext]" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader?modules"]
      }
    ]
  }
};
