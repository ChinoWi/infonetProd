const WebpackMerge=require('webpack-merge')
const commonConfig = require('./webpack.common.config')
const webpack=require('webpack')
const path = require('path')

module.exports=function () {
    return WebpackMerge(commonConfig,{
        output:{
            path:path.resolve(__dirname,'../dist'),
            filename:'[name].[hash].bundle.js',
            publicPath:'/',
            sourceMapFilename:'[name].[hash].map'
        },
        devtool:'eval',
        devServer: {
            contentBase: path.join(__dirname, '../dist'),
            inline: true,
            stats: 'minimal',
            host: 'localhost',
            port: 9000
        },
        plugins:[
            new webpack.HotModuleReplacementPlugin()
        ]

    })
}
