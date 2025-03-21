const path = require('path')

module.exports = {
    resolve: {
        extensions: [".ts",".js"],
        alias: {
          '@*': path.resolve(__dirname, '../src/ts/'),
           Images: path.resolve(__dirname, '../assets/images/'),
        },
       
    },
}