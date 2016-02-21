var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve:{
        extensions:['','.js','.json',"jsx"]
  },
  externals: {
     "jquery": "jQuery",
     "lodash":"lodash"
   },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("css/styles.css")
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      //include: path.join(__dirname, 'src/javascript'),
      exclude: /node_modules/
    },
    { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
    { test: /\.less/,loader: ExtractTextPlugin.extract("style-loader", 'css-loader!less-loader')}
    ]
  }
};
