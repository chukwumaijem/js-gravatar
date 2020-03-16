const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist/');
const APP_DIR = path.resolve(__dirname, 'js/');

const config = {
  entry: APP_DIR + '/js-gravatar.js',
  output: {
    path: BUILD_DIR,
    filename: 'js-gravatar.js',
    publicPath: 'dist/',
    library: 'js-gravatar',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
