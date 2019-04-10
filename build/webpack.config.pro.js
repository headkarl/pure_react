let config = require('../config/pro.js')
const webpack = require("webpack")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const path = require("path")

module.exports = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      // environment parameters definition
      // __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
      'process.server_url': JSON.stringify(config.server_url)
    })
  ]
}
