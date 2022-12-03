const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contentHash].js',// 内容不变则名称不变
        path: path.resolve(__dirname, 'dist')
    }
})