const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
//"html-webpack-plugin": "^3.2.0",
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [

      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },

  plugins:[
    new webpack.BannerPlugin({
      banner: `
      auth: zhaojiedi1992
      email: zhaojiedi1992@outlook.com
      protal: mit
      `
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: "app"
    })
  ],
  devServer:{
    contentBase: path.join(__dirname, 'dist'),
    compress: false ,
    port: 9000
  }
}