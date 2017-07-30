import webpack from 'webpack'
import path from 'path'
import DashboardPlugin from 'webpack-dashboard/plugin'

export default {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client', // note that it reloads the page if hot module reloading fails.
    './src/js/index',
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  output: {
    // Note: Physical files are only output by the production build task `npm run build`.
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './src',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true, // DISABLE redux-devtools HERE
    }),
    new DashboardPlugin({ port: 4242 }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        include: [path.join(__dirname, 'src'), path.join(__dirname, '/')],
        use: ['babel-loader'],
      },
      { test: /\.css?$/, use: ['style-loader', 'css-loader'] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader' },
    ],
  },
}
