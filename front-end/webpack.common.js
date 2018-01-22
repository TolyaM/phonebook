'use strict';
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app/app.js',
    module: {
        rules: [
            {
                // Compiles ES6 and ES7 into ES5 code
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                // Creates style nodes from JS strings and compiles Sass to CSS
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader',
                        { loader: 'postcss-loader', options: {
                                plugins: (loader) => [
                                    autoprefixer({
                                        browsers: [
                                            '>1%',
                                            'last 4 versions',
                                            'Firefox ESR',
                                            'not ie < 9' // React doesn't support IE8 anyway
                                        ]
                                    })
                                ]}
                        }, 'sass-loader']
                })
            },
            {
                // Creates style nodes from JS strings to CSS
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader',
                        { loader: 'postcss-loader', options: {
                                plugins: (loader) => [
                                    autoprefixer({
                                        browsers: [
                                            '>1%',
                                            'last 4 versions',
                                            'Firefox ESR',
                                            'not ie < 9' // React doesn't support IE8 anyway
                                        ]
                                    })
                                ]}
                        }]
                })
            },
            // add loader for images and fronts
            {
                exclude: [
                    /\.(pug|jade)$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.json$/,
                    /\.(sass|scss)$/,
                    /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/

                ],
                loader: 'raw-loader'
            },
            // add loader for images and fronts
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/assets/img/favicon.ico'
        })
    ]
};