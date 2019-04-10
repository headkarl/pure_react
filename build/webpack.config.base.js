const path = require('path')
const webpack = require('webpack')
const merge = require("webpack-merge")
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const configDev = require('./webpack.config.dev.js')
const configPro = require('./webpack.config.pro.js')

// const Visualizer = require('webpack-visualizer-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const otherPlugins = process.argv[1].indexOf('webpack-dev-server') >= 0 ? [] : [
//   new Visualizer(), // remove it in production environment.
//   new BundleAnalyzerPlugin({
//     defaultSizes: 'parsed',
//     // generateStatsFile: true,
//     statsOptions: { source: false }
//   }), // remove it in production environment.
// ]

const postcssOpts = {
  minimize: true,
  ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
  plugins: () => [
    autoprefixer({
      browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
    })
  ],
}

const generateConfig = env => ({
  // entry: { "index": path.resolve(__dirname, '..', '/src/app.jsx') },
  entry: { "index": './src/app.jsx' },
  output: {
    filename: '[name]-[hash:5].js',
    chunkFilename: '[id].chunk.js',
    path: path.join(__dirname, '..', 'dist'),
    publicPath: env === 'development' ? '/' : path.join(__dirname, '..', 'dist/')
  },
  resolve: {
    alias: {
      '@': path.resolve('src')
    },
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve('src'), path.resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      { test: /\.(jsx|js)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(png|gif|jpg|jpeg|bmp)$/i, exclude: /node_modules/, loader: "url-loader?limit=8192" },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          miniCssExtractPlugin.loader,
          // { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader', options: postcssOpts },
          { loader: 'sass-loader' },
        ]
      },
      {
        test: /\.css$/,
        use: [
          miniCssExtractPlugin.loader,
          // { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader', options: postcssOpts }
        ]
      }
    ]
  },
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM",
  //   "@antv/f2": "F2",
  // },
  plugins: [
    new miniCssExtractPlugin({
      filename: 'focus.index.[contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "..", "src/index.html"),
      hash: true,
      minify: {
        collapseWhitespace: true
      }
    }) // auto insert auto-created js & css file into html
    // ...otherPlugins
  ]
})

module.exports = env => {
  let config = env === 'development' ? configDev : configPro
  return merge(generateConfig(env), config)
}
