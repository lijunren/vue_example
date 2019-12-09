const pathlib = require("path");
const Webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");


module.exports = {
    entry: pathlib.resolve("src/index.js"),
    mode: "development",
    output: {
        path: pathlib.resolve("dest"),
        filename: "bundle.js",
    },
    resolve: {
        extensions:[ ".vue",".js"]
    },
    devtool: "source-map",
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
    devServer: {
        contentBase: pathlib.resolve("static"),
        port: 5000,
        hot: true,
        inline: true,
        // noInfo: true
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ]
}