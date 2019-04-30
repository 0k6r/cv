// yarn add -D postcss-loader autoprefixer css-mqpacker cssnano

export const plugins = [
    require('autoprefixer'),
    require('css-mqpacker'),
    require('cssnano')({
        preset: [
            'default', {
                discardComments: {
                    removeAll: true
                }
            }
        ]
    })
];