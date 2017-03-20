const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlReloadPlugin = require('reload-html-webpack-plugin')

module.exports = {
  context: path.join(__dirname, '.'),
  entry: {
    bundle: './client/index.jsx',
    vendor: [
      'rxjs',
      'react',
      'react-dom',
      'redux',
      'redux-actions',
      'react-redux',
      'redux-observable'
    ]
  },
  devtool: 'cheap-module-source-map',
  watch: false,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    modules: ['../node_modules'],
    extensions: ['*', '.json', '.jsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader',
          'babel-loader'
        ]
      },
      {
        include: /\.json$/,
        loaders: ['json-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/client/index.html'),
      inject: false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true
    }),
    new HtmlReloadPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'client'),
    hot: true
  }
}
