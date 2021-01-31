const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const nodeExternals = require("webpack-node-externals");

const config = {
  mode: "production",
  externals: [nodeExternals()],
  output: {
    filename: "[name].js",
    library: "pf-component-system-top",
    libraryTarget: "commonjs",
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      name: false,
    },
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
    }),
  ],
};

module.exports = config;
