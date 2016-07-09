var path = require('path')
var webpack = require('webpack')
console.log(__dirname);

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/main.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
}
