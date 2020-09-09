const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = () => ({
    mode: 'production',
    entry: './tween/index.js',
    plugins: [new CleanWebpackPlugin()],
    module: {
        rules: [],
    },
    output: {
        filename: 'tween.js',
        path: path.resolve('libs'),
    },
});
