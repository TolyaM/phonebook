'use strict';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: './src/app/app.js',
    output: {
        filename: 'app.[hash].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new UglifyJSPlugin(),
        new CleanWebpackPlugin(['build']),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('prod')
            }
        }),
        new ExtractTextPlugin("assets/styles/app.[hash].css"),
    ]
});