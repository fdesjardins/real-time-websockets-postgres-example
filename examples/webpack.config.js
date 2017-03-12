const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: path.join(__dirname, './client')
  },
  devtool: 'eval-source-map',
  watch: false,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: ['../node_modules'],
    extensions: ['*', '.json', '.jsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true
    })
  ]
}
