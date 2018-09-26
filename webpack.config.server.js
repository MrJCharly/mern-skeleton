const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const CURR_DIR = process.cwd()
const config = {
  name: "server",
  entry: [ path.join(CURR_DIR , './server/server.js') ],
  target: "node",
  output: {
    path: path.join(CURR_DIR , '/dist/'),
    filename: "server.generated.js",
    publicPath: '/dist/',
    libraryTarget: "commonjs2"
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  }
}

module.exports = config;
