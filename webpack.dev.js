const { merge } = require('webpack-merge')
const common = require('./webpack.base.js')
const path = require('path')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        // hotOnly: true
        // contentBase: './dist'
    },
    cache: {
        type: 'filesystem' // 默认是memory(内存),现在改为硬盘
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        clean: true
    },
    module: {}
})