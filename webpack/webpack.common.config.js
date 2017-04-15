var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack')
var path = require("path");
const autoprefixer = require('autoprefixer')

const SRC='../resources'
const PROD='../distProd'
const NODE_MODULES='../node_modules'

module.exports = {
    entry: {
        app:'./resources/assets/jsx/app.main.jsx',

        adminAngular:'./resources/assets/ts/app.main.ts',
        adminAngularVendor: [
            './resources/assets/ts/main.polyfill.ts',
            './resources/assets/ts/main.vendor.ts'
        ],

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            { test: /\.ts$/,
                exclude: /node_modules/,
                loader: ['ts-loader','angular2-template-loader']
            },
            {
                test: /\.css?$/,
                loaders: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.htm$/,
                loader: "raw-loader"
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: ['css-loader', 'sass-loader','postcss-loader'],
                })
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                loader: 'file-loader?name=assets/images/[hash].[ext]'
            },
            {
                test: /\.(svg|ico|eot)$/,
                exclude: [/node_modules/],
                loader: 'url-loader?limit=10000&name=./images/icons/[name].[ext]'
            },
            {
                test: /\.(ttf|eot)$/,
                exclude: [/node_modules/],
                loader: 'url-loader?limit=1&name=./fonts/[name].[ext]'
            },
        ]
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),



        new HtmlWebpackPlugin({
            title: 'Infonet Soluciones Project',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            chunks:['app','ventorReact'],
            excludeChunks:['adminAngular','adminAngularVendor'],
            template: './resources/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new HtmlWebpackPlugin({
            title: 'Infonet Soluciones Project Administrador',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            filename:'admin.html',
            Chunks: ['adminAngular','adminAngularVendor'],
            excludeChunks:['app','ventor'],
            template: './resources/admin.ejs', // Load a custom template (ejs by default see the FAQ for details)
        }),


        new ExtractTextPlugin({
            filename: 'assets/css/[name]-[chunkhash].css',
            disable: false,
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['ventorReact'],
            filename: 'assets/ventor/[name].js',
            minChunks: 2,
        }),


        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
                    })
                ]
            }
        }),
    ],
    resolve : {
        extensions: [ ".ts", ".js" ],
        modules : [NODE_MODULES, SRC]
    },
}