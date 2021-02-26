const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const webpack = require("webpack");

module.exports = (env) => ({
  entry: "./src/main.js",
  output: {
    filename: "main.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          outputReport: true,
          emitError: true,
          emitWarning: true,
          failOnError: true,
          failOnWarning: false
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: "compressed",
              }
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new MiniCssExtractPlugin({
      filename: "main.[hash].css",
    }),
    new ESLintPlugin({
      outputReport: true,
      failOnWarning: true,
      failOnError: true,
      emitError: true,
      fix: env.NODE_ENV === "fix"
    }),
    new webpack.HotModuleReplacementPlugin({}),
    new ErrorOverlayPlugin(),
  ],
});
