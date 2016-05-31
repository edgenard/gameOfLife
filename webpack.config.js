const path = require('path')
const IN = path.resolve(__dirname, '/src/index.js')
const OUT = path.resolve(__dirname, 'dist')

module.exports = {
  devTool: 'eval-source-map',
  entry: IN,
  output: {
    filename: 'bundle.js',
    path: OUT
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
