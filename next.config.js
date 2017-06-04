const webpack = require('webpack')

require('dotenv-safe').load()

module.exports = {
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
      })
    )
    return config
  }
}
