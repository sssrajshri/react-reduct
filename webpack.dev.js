const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true, // enable gzip compression
    https: false, // true for self-signed, object for cert authority
    inline: true,
    port: 8080,
    historyApiFallback: {
      disableDotRule: true,
    },
    proxy: {
      '/api/': {
        target: 'http://localhost:3001',
        secure: false
      },
      '/*.*': {
        target: 'http://localhost:8080/',
        rewrite: (req) => {
          req.url = 'index.html';
        }
      }
    }
  },
});
