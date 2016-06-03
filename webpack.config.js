const path = require('path')
const JS_ENTRY = path.resolve('./src/index.js')
const CSS_ENTRY = path.resolve('./src/styles.css')
const IN = ['babel-polyfill', JS_ENTRY, CSS_ENTRY]
const OUT = path.resolve('dist')

module.exports = {
  devTool: 'eval-source-map',
  entry: IN,
  output: {
    filename: 'bundle.js',
    path: OUT
  },
  devServer: {
    contentBase: ''
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'standard',
        exclude: /(node_modules|dist)/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|dist)/,
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
}
