const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './client/src/main'
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('development'),
        'API_URL': JSON.stringify('http://localhost:6001')
      }
    })
  ],
  module: {
    rules: [{
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, './client/src')
      }
    ]
  }
};