const path = require('path')

module.exports = {
    entry: './main.ts',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    module: {
        rules: [
            { test: /\.s[ca]ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.txt$/, use: 'raw-loader' }, 
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.(webp|jp(e)?g|pgn|gif)$/, type: 'asset/resource'}
        ],
    },

};