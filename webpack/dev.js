const webpack = require('webpack');
const {resolve} = require('path');

const config = require('./config');

module.exports = Object.assign(config, {
  mode: 'development',

  entry: [
  	// 'webpack-hot-middleware/client',
  	'./src/index'
  ],

  devServer: {
    port: 3000,
    progress: true,
    contentBase: [resolve(__dirname, '../src/static'), resolve(__dirname, '../../')]
  },

  devtool: 'cheap-source-maps',

  plugins: config.plugins.concat([new webpack.HotModuleReplacementPlugin()])
});
