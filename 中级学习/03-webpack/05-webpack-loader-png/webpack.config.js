const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
            {

                test: /\.css$/,
                use: [
                    { loader:"style-loader" },
                    { loader:"css-loader" }
                ]

            }
        ]
    },


};
