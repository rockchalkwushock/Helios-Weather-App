import webpack from 'webpack';
import { join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const VENDOR_LIBS = [
  'react', 'react-dom',
];

export default {
  devtool: 'eval',
  target: 'web',
  entry: {
    bundle: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:9000',
      'webpack/hot/only-dev-server',
      './src/index.js',
    ],
    vendor: VENDOR_LIBS,
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use: ExtractTextPlugin.extract({
          loader: 'css-loader',
        }),
        test: /\.css$/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          'image-webpack-loader',
        ],
      },
      {
        test: /fonts\/.*\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader?name="[name]-[hash].[ext]"',
      },
    ],
  },
  devServer: {
    contentBase: join(__dirname, './dist'),
    port: 9000,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new ExtractTextPlugin('style.css'),
  ],
};
