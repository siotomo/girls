const path = require("path");
const WebpackAssetsManifest = require("webpack-assets-manifest");
// const LiveReloadPlugin = require("webpack-livereload-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === "production";

module.exports = {
  mode: isProd ? "production" : "development",
  devtool: isProd ? false : "source-map",
  entry: {
    'application': path.resolve(__dirname, "app/frontend/js/packs/application.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "public/packs"),
    publicPath: "/packs/",
    filename: "[name]-[hash].js",
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {loader: 'babel-loader'},
          {loader: 'ts-loader'},
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: !isProd }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: !isProd }
          }
        ]
      }
    ],
  },
  plugins: [
    new WebpackAssetsManifest({
      publicPath: true,
      output: "manifest.json",
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[hash].css"
    }),
    // new LiveReloadPlugin()
  ]
}
