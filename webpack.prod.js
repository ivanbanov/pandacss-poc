const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const PandaCssUnplugin = require('@pandabox/unplugin-panda-macro')
const devConfig = require('./webpack.dev')

module.exports = {
  ...devConfig,
  mode: 'production',
  output: {
    path: __dirname + '/build',
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    ...devConfig.plugins,
    new PandaCssUnplugin()
  ],
}
