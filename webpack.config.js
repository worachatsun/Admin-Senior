const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  devtool: 'eval-source-map',
  entry: { 
    app:[
      'webpack/hot/only-dev-server',
      './src/index.js'
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'jquery',
      
    ]
  },
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader']},
      { test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
    ]
  },
  devServer: {
    hot: true,
    inline: true
  },
  plugins: [
    HtmlWebpackPluginConfig, 
    new webpack.optimize.CommonsChunkPlugin({
      'name': 'vendor',
      'filename': 'vendor.bundle.js'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
  ]

}

