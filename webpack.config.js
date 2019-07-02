const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SassPlugin = require('sass-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'assets'),
        filename: 'css/main.css'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new SassPlugin({'./src/css/main.scss': 'css/main.css'}, process.env.NODE_ENV),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            links: [{ rel: 'stylesheet', type: 'text/css', href: './assets/css/main.css' }],
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },

        ]

    }

};