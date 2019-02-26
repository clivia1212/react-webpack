var path = require('path');

module.exports = {
  // 入口文件
  entry: './app/index.js',
  // 出口文件
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    // 编译后文件保存在内存中
    // 实现实时预览
    // 如果没有的话，每次修改需要手动run build
    publicPath: 'temp/'
  },
  // 开发服务器配置
  // 不需要手动打开页面
  devServer: {
    contentBase: './',
    host: 'localhost',
    port: 3333,
    compress: true,
  },
  // 配置module 
  module: {
    // loaders: [
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     loaders: 'babel-loader',
    //     query: {
    //       presets: ['es2015', 'react']
    //     }
    //   }
    // ]
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};