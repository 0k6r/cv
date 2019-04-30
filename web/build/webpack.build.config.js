import merge from 'webpack-merge';
import baseWebpackConfig from './webpack.base.config';

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: []
})

export default new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})
