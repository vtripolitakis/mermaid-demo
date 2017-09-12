const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  target: 'web',
  entry: {
    'index': './index.js'
  },
  devtool: 'source-map',
  output: {
    path: __dirname,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        parser: {
          amd: false
        },
        include: /node_modules\/lodash\// // https://github.com/lodash/lodash/issues/3052
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].bundle.css')
  ]
}

module.exports = [config]