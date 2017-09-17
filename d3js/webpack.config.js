"use strict";

const path = require('path');

module.exports = {

    entry: "./src/main.js",

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },

    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },

    devtool: 'inline-source-map',

    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2017']
                    }
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};