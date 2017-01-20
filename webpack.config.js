/* eslint-env node */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Use path.join para evitar problemas com o Windows
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            // {modules:false} é a parte crucial para ativar o tree-shaking
            options: {presets: [['es2015', {modules: false}]]},
          },
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [{loader: 'eslint-loader'}],
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              // roda o loader anterior (postcss) nos css @importados também.
              importLoaders: 1,
            },
          },
          {loader: 'postcss-loader'}, // a configuração está em postcss.config.js
        ],
      },
      {
        test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: 'fonts/[name].[ext]'},
          },
        ],
      },
      {
        test: /\.(gif|jpg|png|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: 'images/[name].[ext]'},
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.join(__dirname, 'src', 'index.ejs')}),
  ],
};
