import webpack from 'webpack';
import path from 'path';

export default {
  debug: true, //displays debug info
  devtool: 'cheap-module-source-map',
  noInfo: true, //displays all the file is bundled. adds lots of noise
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index') //actual entry point is always passed last
  ],
  target: 'web', //can also be set as node, so that node can work on it. using web, it bundles in such a way that web browser can understand it
  output: {
    path: __dirname + '/dist', //Creates bundle in memory and provide it to browser Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: { //tells webpack dev server where our code is
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //enables us to replace modules without doing full page refresh
    new webpack.NoErrorsPlugin() //keep errors from breaking the hot module replacement experience. It gives nice error messages
  ],
  module: {
    loaders: [ //recommended settings for bootstrap
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(jpg|png)$/, loader: 'file?name=images/[name].[ext]'}
    ]
  }
};
