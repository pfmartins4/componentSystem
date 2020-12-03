const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { resolve } = require("path");
const commonPaths = require("./commonPaths");

const config = {
  entry: `${commonPaths.appEntry}/index.js`,
  output: {
    path: commonPaths.outputPath,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: ["@babel/env"],
        },
      },
      {
        test: [
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
          /\.svg$/,
          /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        ],
        type: "asset/resource",
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    roots: [resolve(__dirname, "../../")],
    extensions: ["*", ".js", ".jsx"],
    symlinks: false,
    cacheWithContext: false,
    alias: commonPaths.resolvedAlias,
  },
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    emitOnErrors: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new Dotenv({
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      // favicon: 'public/favicon.ico',
    }),
  ],
};

module.exports = config;
