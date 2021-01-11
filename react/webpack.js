const path = require('path');
const { Module } = require('webpack');
//const { module } = require('webpack');

module.exports = {
    mode: 'development',
    entry: { 
        'assets-react': './index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './build'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    }
};