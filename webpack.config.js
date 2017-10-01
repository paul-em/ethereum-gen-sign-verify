const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'browser');

module.exports = [
  {
    context: SRC_DIR,
    entry: `.${path.sep}index.js`,
    target: 'web',
    output: {
      filename: `.${path.sep}lib.js`,
      path: DIST_DIR,
      library: 'ethGen',
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
  },
];