var path = require('path');      // path module
var autoprefixer = require('autoprefixer');

module.exports = {
  context: path.resolve('js'),
  entry: './app.js',
  output: {
    path: path.resolve('build/js'),
    publicPath: '/public/assets/js/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'public'
  },
  watch: true,

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'
      }
    ],
    loaders: [
      { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.png$/, loader: 'url-loader?limit=100000' },
      { test: /\.jpg$/, loader: 'file-loader' },
      { test: /\.scss$/, exclude: /node_modules/, loader: 'style-loader!css-loader!postcss-loader!sass-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  }
}
