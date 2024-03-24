const path = require('path');
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

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

const { entry, htmlWebpackPlugins } = setMPA();

module.exports = {
  entry,
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
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
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'font/[hash][ext][query]'
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader']
      },
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
      {
        test: /\.art$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'art-template-loader'
          }
        ]
      }
    ],
  },
  plugins: [
    ...htmlWebpackPlugins,
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  resolve: {
    // alias: {
    //   '@': path.resolve(__dirname, '../src'),
    //        //或者这样写 '@': '/src' => webpack默认会将相对路径与上下文路径进行拼接 => 上下文路径默认就是node运行是的路径 => 对于我来说就是E:node\前端项目\src
    // },
    // extensions: ['.js', '.json', '.ts', '.tsx'], //告诉webpack你引入的文件要寻找哪些后缀的 => 简单来说就是你../index但没有说明是什么后缀的文件(你不设置这里的话好像只会找后缀为js的文件)。
    fallback: {
      // path: require.resolve('path-browserify'),
      // "https": require.resolve("https-browserify"),
      "os": false,
      "https": false,
      "path": false,
      "http": false,
      "url": false,
      "fs": false,
    },
  }
};