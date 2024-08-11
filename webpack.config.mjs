import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import webpack from 'webpack';
import Dotenv from 'dotenv-webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  mode: isProduction ? 'production' : 'development',
  entry: './app/static/pages/layout.tsx',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'app/static/dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true, // Clean the output directory before each build
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                {
                  pragma: 'h',
                  pragmaFrag: 'Fragment',
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Ensure the output directory is cleaned before each build
    new HtmlWebpackPlugin({
      template: './app/templates/index.html',
      filename: 'index.html',
      inject: 'body',
      scriptLoading: 'blocking',
      minify: isProduction
        ? {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          }
        : false,
    }),
    new Dotenv(),
    ...(isProduction
      ? [
          new MiniCssExtractPlugin({
            filename: 'globals.css',
          }),
        ]
      : [new webpack.HotModuleReplacementPlugin()]),
  ],
  optimization: isProduction
    ? {
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      }
    : {},
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  devServer: {
    static: resolve(__dirname, 'app/static/dist'),
    hot: true,
  },
};

export default config;