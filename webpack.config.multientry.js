const webpack = require('webpack');
const {resolve} = require('node:path');

const hotMiddlewareScript =
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
  mode: 'development',
  context: __dirname,
  // Include the hot middleware with each entry point
  entry: {
    // Add the client which connects to our middleware
    client: ['./client.js', hotMiddlewareScript],
    extra: ['./extra.js', hotMiddlewareScript],
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '[name].js',
    chunkLoadingGlobal: `webpackJsonp__[name]`,
    library: ['__my_library', '[name]'],
    path: resolve(process.cwd(), 'dist'),
    devtoolNamespace: '.',
  },
  devtool: 'source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
