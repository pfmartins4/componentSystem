const path = require("path");

function srcPath(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = {
  entry: "./src/app",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /^(?!.*.test.(t|j)s$).*.(t|j)sx?/,
        use: ["babel-loader", "ts-loader"],
        exclude: [/node_modules/],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              limit: 10000,
              mimetype: "application/font-woff",
            },
          },
        ],
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.json$/,
        loader: "json-loader",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".mdx"],
    alias: {
      assets: srcPath("assets"),
      components: srcPath("components"),
      helpers: srcPath("helpers"),
      styles: srcPath("styles"),
    },
  },
  devtool: "source-map",
};
