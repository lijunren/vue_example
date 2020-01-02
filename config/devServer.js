const webServer = require("webpack-dev-server");
const webpack = require("webpack");
const baseConfig = require("./base.config");
const pathlib = require("path");
const merge = require("webpack-merge");

const lastConfig = merge(baseConfig,{
    mode: "development",
});
const devServerConfig = {
        contentBase: pathlib.resolve("static"),
        historyApiFallback: true, // 可以解决router的是history模式下，刷新页面不正常
        hot: true,
        inline: true,
        // noInfo: true
}

const compiler = webpack(lastConfig);
const devServer = new webServer(compiler,devServerConfig);
devServer.listen(5000, "localhost",() => {
    console.log("启动……");
});