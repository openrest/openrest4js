module.exports = {
    entry: [
        './index'
    ],
    output: {
        path: 'dist/',
        filename: 'index.js',
        libraryTarget: 'commonjs',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel'
            }
        ]
    }
}
