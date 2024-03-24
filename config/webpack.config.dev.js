const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    server: 'http',
    compress: true, // 代码压缩，增加gzip
    port: 4000, // 端口号
    proxy: [
      { //代理配置
        context: ['/api'],
        target: 'http://localhost:3000',
      },
    ],
    hot: true,
	  // historyApiFallback: true //历史路径
  },
}