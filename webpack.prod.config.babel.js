import autoprefixer from 'autoprefixer';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { join } from 'path';
import OfflinePlugin from 'offline-plugin';
import SWPrecacheWebpackPlugin from 'sw-precache-webpack-plugin';
import webpack from 'webpack';

const VENDOR_LIBS = [
  'react', 'react-dom',
];

export default {
  devtool: 'source-map',
  entry: {
    bundle: [
      'babel-polyfill',
      './src/index.js',
    ],
    vendor: VENDOR_LIBS,
  },
  target: 'web',
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js',
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
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: ['css-loader', 'postcss-loader'],
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
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        postcss: [
          autoprefixer(),
        ],
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity,
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CopyWebpackPlugin([
      { from: './src/manifest.json', to: 'manifest.json' },
    ]),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new SWPrecacheWebpackPlugin({
      staticFileGlobs: [
        'src/styles/styles.css',
      ],
      stripPrefix: 'src/static/',
      mergeStaticsConfig: true,
      staticFileGlobsIgnorePatterns: [/\.map$/],
    }),
    new OfflinePlugin(),
  ],
};
