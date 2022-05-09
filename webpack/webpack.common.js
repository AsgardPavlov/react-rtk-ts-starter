const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html'),
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-typescript', '@babel/preset-env'],
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(?:ico|gif|jpg|jpeg|png|svg|webp)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: 'asset/inline',
            },
        ],
    },
};
