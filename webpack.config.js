const path = require('path');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    application: path.resolve(__dirname, 'app/frontend/js/packs/application.tsx'),
    ruka: path.resolve(__dirname, 'app/frontend/js/packs/ruka.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'public/packs'),
    publicPath: '/packs/',
    filename: '[name]-[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new WebpackAssetsManifest({
      publicPath: true,
      output: 'manifest.json',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new LiveReloadPlugin(),
  ],
};
