var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/App.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './build')
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0']
      },
      { 
        test: /\.coffee$/, 
        loader: "coffee-loader" 
      },
      { 
        test: /\.(coffee\.md|litcoffee)$/, 
        loader: "coffee-loader?literate" 
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};