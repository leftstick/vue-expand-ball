const {resolve} = require('path');
const webpack = require('webpack');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = function() {
    return {
        entry: {
            index: resolve(__dirname, 'src', 'index.js')
        },
        output: {
            path: resolve(__dirname, 'dist'),
            filename: 'vue-expand-ball.min.js',
            libraryTarget: 'umd'

        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: [{
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                js: 'babel-loader?{"presets":[["es2015", {"modules": false}]],"plugins": ["transform-object-rest-spread"]}',
                                css: 'vue-style-loader!css-loader!postcss-loader'
                            }
                        }
                    }]
                },
                {
                    test: /\.js$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [['es2015', {
                                    modules: false
                                }]],
                                plugins: ['transform-object-rest-spread']
                            }
                        }
                    ],
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            modules: [
                resolve(__dirname, 'node_modules'),
                resolve(__dirname, 'src')
            ],
            extensions: [
                '.js',
                '.vue'
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new UnminifiedWebpackPlugin()
        ]
    };
};
