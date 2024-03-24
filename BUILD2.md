# 单页面应用
基本的本地开发架构已经完成，但还有很多问题，接下来一一解决
## 第一阶段
区分环境，根据不同的环境使用不同的配置文件
1. 安装webpack-merge，并将配置文件根据环境变量使用
```
npm i webpack-merge -D
```
2. 拆分webpack.config.js，将配置文件根据环境env使用

## 第二阶段
不对js做处理的话，编译打包的js中新语法和api没有办法在老版本浏览器中使用，会报错。
1. 安装babel, 配置不同的babel插件
```
npm i babel-loader @babel/core @babel/plugin-transform-runtime @babel/preset-env -D

// 配置webpack.config.common.js
{
  test: /\.js$/i,
  include: path.resolve(__dirname, 'src'),
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env'],
    plugins: [['@babel/plugin-transform-runtime']],
  },
},
```
2. 配置.babelrc
```
{
  "presets": ["@babel/preset-env"]
}
```

## 总结
现在已经可以实现一个简单的webpack单页面项目。之后可以继续向这个项目添加依赖实现功能。

