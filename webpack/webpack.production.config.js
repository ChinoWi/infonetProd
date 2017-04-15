/*var CopyWebpackPlugin = require('copy-webpack-plugin');

const commonConfig = require('./webpack.common.config');


module.exports = Object.assign(commonConfig,
    {
        watch: false,
        devtool: 'eval',
    }
);

*/

const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeJsPlugin=require('optimize-js-plugin')
const webpack=require('webpack')
const WebpackMerge=require('webpack-merge')
const path=require('path')

const commonConfig = require('./webpack.common.config');

module.exports=function () {
    return WebpackMerge(commonConfig,{
        output: {
            path: path.resolve(__dirname,'../dist'),
            filename: 'assets/ventor/[name].bundle.js'
        },
        watch:false,
        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),/*
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                sourceMap: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            }),
            */
            new CopyWebpackPlugin([{
                from: './resources/apiPHP', to: 'apiPHP'
            }]),
            new CopyWebpackPlugin([{
                from: './resources/.htaccess', to: ''
            }])
        ]
    })
}
