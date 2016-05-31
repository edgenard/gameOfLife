module.exports = {
  devTool: 'eval-source-map',
  entry: __dirname + '/src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/'
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
