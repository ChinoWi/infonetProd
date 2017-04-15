const IS_PROD    = (process.env.npm_lifecycle_event === 'prod')
const devConfig  = require('./webpack/webpack.develpment.config')
const prodConfig = require('./webpack/webpack.production.config')

// Determines which config to use and then exports it.
module.exports = (IS_PROD) ? prodConfig : devConfig;