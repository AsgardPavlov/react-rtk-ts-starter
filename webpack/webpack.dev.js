const webpack = require('webpack');
const reactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 9999,
        hot: true,
        historyApiFallback: true,
        host: '127.0.0.1',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('dev mode'),
        }),
        new reactRefreshWebpackPlugin(),
    ],
};
