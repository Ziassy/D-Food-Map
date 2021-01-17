/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { InjectManifest } = require('workbox-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const path = require('path');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader?url=false',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/images/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: ['**/img/**'],
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new WebpackPwaManifest({
      name: 'Food Map',
      short_name: 'Food Map',
      description: 'Find more restaurants',
      start_url: './index.html',
      display: 'standalone',
      background_color: '#FFAA00',
      theme_color: '#FFAA00',
      fingerprints: false,
      ios: true,
      crossorigin: 'anonymous',
      icons: [
        {
          src: path.resolve('src/images/icons/icon.png'),
          sizes: [192, 256, 384, 512],
          purpose: 'any maskable',
        },
        {
          src: path.resolve('src/images/icons/icon.png'),
          sizes: [192, 256, 384, 512],
          purpose: 'any maskable',
          ios: true,
        },
      ],
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'src/sw.js'),
    }),
    new ImageminWebpackPlugin({
      plugins: [
        imageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
        imageminPngquant({
          quality: [0.3, 0.5],
        }),
      ],
    }),
  ],
};
