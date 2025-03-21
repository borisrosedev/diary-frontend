const path = require('path')

module.exports = {
    resolve: {
        alias: {
          '@*': path.resolve(__dirname, 'src/ts/'),
           Images: path.resolve(__dirname, '/assets/images/'),
        },
       
    },
}