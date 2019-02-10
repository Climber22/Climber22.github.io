const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./dev/react/index.jsx",
  optimization: {
    minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin({})]
  },
  output: {
    path: path.join(__dirname, "/public"),
    publicPath: "public/",
    filename: "bundle.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.join(__dirname, "dev/react"),
      path.join(__dirname, "dev/assets/css"),
      path.join(__dirname, "dev/assets/images"),
      "node_modules"
    ]
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
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../../"
            }
          },
          "css-loader?modules"
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images"
            }
          }
        ]
      }
    ]
  }
};
