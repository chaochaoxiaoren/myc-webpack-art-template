const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.config.common')
const productionConfig = require('./webpack.config.prod')
const developmentConfig = require('./webpack.config.dev')

module.exports = (env) => {
  if (env.production) {
    console.log('prod');
    return merge(commonConfig, productionConfig)
  } else if(env.development) {
    console.log('dev');
    return merge(commonConfig, developmentConfig)
  } else {
    return new Error('No matching configuration was found')
  }
}
