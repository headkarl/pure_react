let config = require('../config/dev.js')
const webpack = require("webpack")
const path = require("path")
// const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    /*proxy: {
      // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
      // koa 代码在 ./mock 目录中，启动命令为 npm run mock
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      }
    },*/
    // contentBase: "./dist",
    publicPath: '/',
    port: 8000,
    open: true, // 自动打开页面
    inline: true, //实时刷新
    hot: true,  // 使用热加载插件 HotModuleReplacementPlugin
    historyApiFallback: true // 保证刷新后可以正常访问router url
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // hot module replace
    new webpack.DefinePlugin({
      // environment parameters definition
      // __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
      'process.server_url': JSON.stringify(config.server_url)
    })
    // ...otherPlugins
  ]
}
