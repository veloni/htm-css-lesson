const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'assets-react': './index.js',
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
                use: ['babel-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    }
};
