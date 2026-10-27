const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry : {
        main: path.resolve(__dirname, './src/index.jsx'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/myAutomat_portfolio/'
        // publicPath: '/'
    },
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(ico|png|jpg|jpeg|svg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name].[hash][ext][query]'
                }
            },
            {
                test: /\.(woff|woff2|otf|eot|ttf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name].[hash][ext][query]'
                }
            },
            {
                test: /\.tpl\.html$/,
                exclude: /node_modules/,
                type: 'asset/source',
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'my_portfolio',
            favicon: './src/images/logo.png',
            template: './public/index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}