const path = require('path');
const mergeConfig = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const webpackBaseConfig = require('./webpack.base');

const config = {
    target: 'node',
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js', // check whether this can be made optional or not
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()]
};

module.exports = mergeConfig(webpackBaseConfig, config);