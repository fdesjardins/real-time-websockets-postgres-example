const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './client/index.jsx',
    vendor: [
      'react',
      'react-dom',
      'ws'
    ]
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
      filename: 'vendor.bundle.js',
      minChunks: Infinity
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true
    })
  ]
}
