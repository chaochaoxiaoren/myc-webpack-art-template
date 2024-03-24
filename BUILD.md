# art多页面应用
art已经没人关注了，我这是回顾以前项目，以后项目不要再使用了

## 第一阶段 配置多页面
1. 配置多个页面需要多个entry和html
```js
const setMPA = () => {
  const entry = {};
  const htmlWebpackPlugins = [];
  const entryFiles = glob.sync('src/views/*/index.js');
  entryFiles.forEach((entryFile) => {
    console.log(entryFile);
    const file = entryFile.replaceAll('\\', '/')
    const match = file.match(/src\/views\/(.*)\/index\.js/);
    const pageName = match && match[1];
    entry[pageName] = path.resolve(__dirname, `../${entryFile}`);
    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        // inlineSource: '.css$',
        template: path.join(__dirname, `../src/views/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false
        }
      })
    );
  });
  return {
    entry,
    htmlWebpackPlugins
  }
};
```
## 第二阶段 配置art-template依赖

1. 安装
```
npm install art-template
npm install art-template-loader --save-dev
```
2. 配置webpack.common.js
```
{
  test: /\.art$/i,
  loader: "art-template-loader",
  options: {
      // art-template options (if necessary)
      // @see https://github.com/aui/art-template
  }
}

resolve: {
  fallback: {
    // path: require.resolve('path-browserify'),
    // "https": require.resolve("https-browserify"),
    "os": false,
    "https": false,
    "path": false,
    "http": false,
    "url": false,
    "fs": false,
  }
}
```

## 注意
因为art-template没什么项目再使用，而且项目也没怎么维护了，所以以后就不考虑了