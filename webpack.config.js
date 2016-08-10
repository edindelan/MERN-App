var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CssSourcemapPlugin = require('css-sourcemaps-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js|.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                loader:'babel-loader',
                query: {
                    presets: ['react','es2015','stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties',
                     'transform-decorators-legacy']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
    },
    plugins: [
        new ExtractTextPlugin('src/assets/stylesheets/app.css', { allChunks: true }),
        new CssSourcemapPlugin()
    ]

};
