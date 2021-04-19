const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const nodeExternals = require("webpack-node-externals");

const config = {
  mode: "production",
  externals: {
    "styled-components": {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      amd: "styled-components",
    },
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
    },
    "material-design-icons": {
      commonjs: "material-design-icons",
      commonjs2: "material-design-icons",
      amd: "material-design-icons",
    },
  },
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
