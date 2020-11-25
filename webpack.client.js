const path = require('path');
const mergeConfig = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');

const config = {
    entry: './src/client/client.js',
    mode: 'development',
    output: {
        filename: 'bundle.client.js', // check whether this can be made optional or not
        path: path.resolve(__dirname, 'public')
    }
}

module.exports = mergeConfig(webpackBaseConfig, config);