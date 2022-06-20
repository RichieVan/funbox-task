const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config({ path: './.env' });

const modeStatus = (process.env?.NODE_ENV === 'production') ? 'production' : 'development';

module.exports = {
  mode: modeStatus,
  entry: [
    './src/index.tsx',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'build/project.js',
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: '/node_modules',
        use: 'babel-loader',
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          modeStatus === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'build/[name].css',
      chunkFilename: 'build/[id].css',
    }),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      minify: modeStatus === 'production',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  resolve: {
    alias: {
      Images: path.resolve(__dirname, 'src/assets/images'),
      Utilities: path.resolve(__dirname, 'src/utils'),
      Styles: path.resolve(__dirname, 'src/scss'),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss', '.css'],
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
  },
  target: ['web', 'es5'],
  devServer: {
    compress: true,
    port: 8000,
    client: {
      logging: 'none',
      progress: false,
    },
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true,
    },
    historyApiFallback: true,
  },
  devtool: 'source-map',
};
