var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/App.js',
  output: { path: __dirname, filename: 'build/bundle.js' },
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]',
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader'
      },
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
