const path = require('path');
const RemoveWebpackPlugin = require('remove-files-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MODE = 'development';

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname + '/public/dist/'),
    filename: '[name].js',
    publicPath: './public/dist',
  },
  devServer: {
    contentBase: path.resolve(__dirname + '/public/'),
    port: 3600,
    publicPath: '/public/dist/',
    hot: true,
  },
  devtool: 'eval-source-map',
  mode: MODE,
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sc|c)ss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new RemoveWebpackPlugin({
      before: {
        include: ['./public/dist/*', './public/home.html'],
      },
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/home.html',
      filename: '../home.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [path.resolve(__dirname + '/src/'), 'node_modules'],
  },
};
