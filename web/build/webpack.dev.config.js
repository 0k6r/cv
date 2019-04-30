const webpack = require('../src')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 8081,
        contentBase: baseWebpackConfig.externals.paths.dist,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins:[
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})
