const path = require('path');
const webpack = require('webpack');
const CURR_DIR = process.cwd();
const config = {
  mode: "production",
  entry: [
    path.join(CURR_DIR, 'client/main.js')
  ],
  output: {
    path: path.join(CURR_DIR , '/dist'),
    filename: 'bundle.js',
    publicPath: "/dist/"
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  }
}

module.exports = config
