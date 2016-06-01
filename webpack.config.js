const path = require('path')
const JS_ENTRY = path.resolve('./src/index.js')
// const CSS_ENTRY = path.resolve(__dirname, './src/styles.css')
const IN = JS_ENTRY
const OUT = path.resolve('dist')

module.exports = {
  devTool: 'eval-source-map',
  entry: IN,
  output: {
    filename: 'bundle.js',
    path: OUT
  },
  devServer: {
    contentBase: OUT
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
      }
    ]
  }
}
