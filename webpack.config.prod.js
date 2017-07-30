import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __CLIENT__: false,
  __DEVELOPMENT__ : false,
  __DEVTOOLS: false,
}

export default {
  devtool: 'source-map',
  entry: './src/js/index',
  target: 'web',
  output: {
    // Note: Physical files are only output by the production build task `npm run build`.
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin({ filename: 'style.css' }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        include: [path.join(__dirname, 'src'), path.join(__dirname, '/')],
        use: ['babel-loader'],
      },
      {
        test: /(\.css)$/,
        use: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
        ]),
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: ['file-loader'] },
    ],
  },
}
