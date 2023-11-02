const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/util/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        // compress: true,
        port: '8081',
        // open: true
    },
    module: {
        rules: [
            // * css
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            // * 图片
            {
                test: /\.(jpg|png|gif|jpeg|mp4)$/,
                type: 'asset/resource',
                // use:'file-loader',
                generator: {
                    filename: 'image/[name][ext]'
                }
            },
            // * 字体
            {
                test: /\.(ttf|woff2|otf?)$/,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[hash:8][ext][query]",
                },
            }
        ]
    },
    plugins: [
        // html
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),

        // css
        new MiniCssExtractPlugin({
            filename: "css/index.css",
        }),

        // clean dist
        new CleanWebpackPlugin()
    ]
}