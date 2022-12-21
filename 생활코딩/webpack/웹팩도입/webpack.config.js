const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
    entry:{
        index:"./source/index.js",
        about:"./source/about.js"
    },
    output:{
        path:path.resolve(__dirname,"public"),
        filename:'[name]_bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[new HtmlWebpackPlugin({
        template:"./source/index.html",
        filename:"./index.html",
        chunks:['index']
    }),new HtmlWebpackPlugin({
        template:"./source/about.html",
        filename:"./about.html",
        chunks:['about']
    })],
}
