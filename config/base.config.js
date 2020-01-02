const pathlib = require("path");
const Webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: pathlib.resolve("src/index.js"),
    output: {
        path: pathlib.resolve("dist"),
        filename: "static/js/[hash:8].js",
    },
    resolve: {
        extensions:[ ".vue",".js"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, //排除那些目录不需要编译
                // use: "babel-loader"
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader"
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader"
                }
            }
        ]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: "惟农+",
            filename: "index.html",
            inject: true,
            template: pathlib.resolve("static/index.html"),
            favicon: pathlib.resolve("static/favicon.ico"),
        }),
    ]
}