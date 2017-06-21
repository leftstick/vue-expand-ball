const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env = {}) {
    const {isDemo} = env;
    return {
        entry: {
            ext: resolve(__dirname, 'demo', 'fw', 'ext', 'index.js'),
            index: resolve(__dirname, 'demo', 'index.js')
        },
        output: {
            path: resolve(__dirname, 'build'),
            filename: (isDemo ? '[hash].' : '') + '[name].bundle.js',
            chunkFilename: (isDemo ? '[hash].' : '') + '[id].bundle.js',
            publicPath: isDemo ? '/vue-expand-ball/' : '/'
        },
        devtool: isDemo ? '' : '#source-map',
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.vue$/,
                    use: [{
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                js: 'babel-loader?{"presets":[["es2015", {"modules": false}]],"plugins": ["transform-object-rest-spread"]}',
                                css: 'vue-style-loader!css-loader!postcss-loader?sourceMap=true'
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
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|gif)\w*/,
                    use: ['file-loader']
                }
            ]
        },
        resolve: {
            modules: [
                resolve(__dirname, 'node_modules'),
                resolve(__dirname, 'demo')
            ],
            extensions: [
                '.js',
                '.vue'
            ]
        },
        plugins: (isDemo ? [new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })] : []).concat([
            new webpack.optimize.CommonsChunkPlugin({
                name: ['app', 'ext']
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                inject: 'body',
                template: resolve(__dirname, 'demo', 'index.html'),
                favicon: resolve(__dirname, 'demo', 'img', 'favicon.ico'),
                hash: false
            })
        ])
    }
};
