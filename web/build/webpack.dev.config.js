import { SourceMapDevToolPlugin } from '../src';
import merge from 'webpack-merge';
import baseWebpackConfig, { externals } from './webpack.base.config';

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 8081,
        contentBase: externals.paths.dist,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins: [
        new SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
})

export default new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})
