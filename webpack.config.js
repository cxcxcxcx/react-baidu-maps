const path = require('path');

process.env.NODE_ENV = 'development';

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: ['./samples/src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'samples/'),
    compress: false,
    watchContentBase: true,
    hot: true,
    port: 8700,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  resolve: {
    alias: {
      'react-baidu-maps': path.resolve(__dirname, './src/')
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
  ]
};
