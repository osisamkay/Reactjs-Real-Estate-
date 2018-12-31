require('dotenv').config();
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(process.env.NODE_ENV);

const entries = ['./src/index.js'];

if(process.env.NODE_ENV === 'development') {
  entries.push('webpack-hot-middleware/client?path=http://localhost:7800/__webpack_hmr&timeout=4000');
}

const config = {
  mode: 'development',
  entry: entries,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/docs`,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpege: {
                progressive: true,
                quality: 80,
              },
              optipng: {
                optimizationLevel: 7,
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'assets/favicon.ico',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config; 
