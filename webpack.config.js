/* eslint-env node */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  // Use path.join para evitar problemas com o Windows
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [{loader: 'vue-loader'}],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // configurações em .babelrc
        use: [{loader: 'babel-loader'}],
      },
      {
        test: /\.(js|vue)/,
        enforce: 'pre',
        // configurações em .eslintrc.js
        use: [{loader: 'eslint-loader'}],
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            // roda 1 loader anterior (postcss) nos css @importados também.
            options: {importLoaders: 1, sourceMap: true},
          },
          // configuração em postcss.config.js
          {loader: 'postcss-loader'},
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
