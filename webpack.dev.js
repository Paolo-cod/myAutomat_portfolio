const path = require('path')
const { merge } = require('webpack-merge');
const webpack = require('webpack')
const common = require("./webpack.common.js");


module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,   // postcss + sass (ou 1 si pas de sass)
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            }
        ]
    },
    devtool: 'eval-source-map',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        historyApiFallback: true,
        compress: true,
        hot: true,
        port: 3000,
        open: true, 
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});
