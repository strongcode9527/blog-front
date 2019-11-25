var path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [path.resolve(process.cwd(), './src/index.js')],
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'static/js/[hash].bundle.js',
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: 'static/js/[hash].[name].chunk.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader',
            options: {
                plugins: () => [ require('autoprefixer') ]
            }
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },
    ]
  },
  devtool: 'inline-source-map',
}