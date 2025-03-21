const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ConsoleLogOnBuildWebpackPlugin = require('./webpack/plugins/ConsoleLogOnBuildWebpackPlugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    extends: [
        path.resolve(__dirname, './webpack/resolvers.webpack.config.js'),
        path.resolve(__dirname, './webpack/js.webpack.config.js'),
        path.resolve(__dirname, './webpack/performance.webpack.config.js'),
        path.resolve(__dirname, './webpack/base.webpack.config.js')
    ],
    cache: false,
    devServer: {
        port: 8080,
        proxy: [
            {
              context: ['/api'],
              target: 'http://localhost:3000',
              pathRewrite: { '^/api': '/api/v1' },
              secure: false
            },
        ],
        open: [ {
          // target: ['./index.html'],
          app: {
            name: 'google-chrome',
            arguments: ['--incognito', '--new-window'],
          },
        }],
        
        devMiddleware: {
          index: true,
          mimeTypes: { phtml: 'text/html' },
          publicPath: '/',
          serverSideRender: true,
          writeToDisk: true,
        },
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    plugins: [
        new ConsoleLogOnBuildWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './index.html' }),
        new CopyPlugin({
          patterns: [{
            from: 'assets', to: 'assets'
          }]
        })
    ],
};