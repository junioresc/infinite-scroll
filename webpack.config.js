const path = require('path');
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    plugins: [
        new Dotenv()
    ],
    mode: 'development'
};