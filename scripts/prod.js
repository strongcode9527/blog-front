const webpack = require('webpack');
const config = require('../webpack/webpack.prod');

const compiler = webpack(config);
compiler.run();