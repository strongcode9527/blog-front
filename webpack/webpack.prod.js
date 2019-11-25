  
const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

console.log(merge(common, {
    mode: 'production',
    target: 'node',
    plugins: [
      new BundleAnalyzerPlugin(),
      new HtmlWebpackPlugin({template: './index.html'})
    ]
  }))

module.exports = merge(common, {
  mode: 'production',
  target: 'node',
  plugins: [
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({template: './index.html'})
  ]
});