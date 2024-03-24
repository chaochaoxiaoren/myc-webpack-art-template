# 单页面应用

## 第一阶段搭建过程
1. 项目初始化
```
git init
git remote add origin https://github.com/chaochaoxiaoren/myc-webpack-spa.git
npm init -y
```
2. 安装webpack
```
npm i webpack webpack-cli -D
```
3. 添加webpack.config.js文件
```
// 基本配置
// 会把项目目录下的index.js 打包成 dist/index.bundle.js
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
4. package.json配置script
```
{
  ...
  "scripts": {
    "build": "webpack"
  },
}
```

## 第二阶段
> 明确当前是单页面应用，且不使用react, vue
1. 添加html插件
```
# 安装html插件，可以自动生成也可以使用模版
npm i html-webpack-plugin -D
```
2. 新增html模版，public/index.html
3. 配置webpack.config.js文件
```
...
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...
  plugins: [
    // 配置HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      template: './public/index.html', // 模板文件
      filename: 'index.html', // 生成文件名
      inject: 'body', // 在哪个标签引入
    }),
  ]
};
```

## 第三阶段
新增css解析
1. 添加解析css的loader
```
// style-loader 是将css打包进js文件内，除非项目很小，否则不建议使用
// 此处使用mini-css-extract-plugin 配置导出的css文件
npm i style-loader css-loader postcss-loader mini-css-extract-plugin autoprefixer -D
```
2. 配置postcss.config.js和.browserslistrc，用于做css兼容
```
// postcss.config.js
module.exports = {
  plugins: ['autoprefixer']
};

// .browserslistrc
last 2 versions
> 1%
iOS 7
last 3 iOS versions
```
3. 配置webpack.config.js
```
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // 表示需要先经过多少loader的处理
                                // https://webpack.docschina.org/loaders/css-loader/#importloaders 
                                // 0 => no loaders (default);
                                // 1 => postcss-loader;
            },
          },
          'postcss-loader', // 和autoprefix 配合做css兼容处理
        ],
      }
    ],
  },
  plugins: [
    ...
    // 配置 打包的css文件
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    }),
  ]
};
```
4. 新增css文件，且必须经过js引入, *.module.css 这样的文件结构会被webpack当做模块css直接引用，很方便。

## 第四阶段
webpack简单优化，之后会进行复杂优化
1. 配置mode，output修改webpack.config.js
```
{
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true // 每次build时删除上次build生成的文件
  },
}
```
2. 开启热更新，方便开发，
```
// 安装
npm i webpack-dev-server -D

// 修改webpack.config.js
devServer: {
  server: 'http',
  static: path.resolve(__dirname, './dist'),
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
```
3. 配置sourcemap，方便开发时定位问题
```
devtool: 'eval-source-map',
```

## 第五阶段
支持常用的一些文件，支持cdn配置
1. 字体，iconfont
```
module: {
  rules: [
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'font/[hash][ext][query]'
      }
    },
  ]
}
```
2. 图片
```
{
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'images/[hash][ext][query]'
  }
},
```
3. csv, tsv
```
npm i csv-loader -D
{
  test: /\.(csv|tsv)$/i,
  use: ['csv-loader']
},
```
4. xml
```
npm i xml-loader -D
{
  test: /\.xml$/i,
  use: ['xml-loader']
},
```
5. toml
```
npm i toml -D
{
  test: /\.toml$/i,
  type: 'json',
  parser: {
    parse: toml.parse,
  },
},
```
6. yaml
```
npm i yamljs -D
{
  test: /\.yaml$/i,
  type: 'json',
  parser: {
    parse: yaml.parse,
  },
},
```
7. json5
```
npm i json5 -D
{
  test: /\.json5$/i,
  type: 'json',
  parser: {
    parse: json5.parse,
  },
},
```