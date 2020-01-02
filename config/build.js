const webServer = require("webpack-dev-server");
const webpack = require("webpack");
const baseConfig = require("./base.config");
const pathlib = require("path");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const fslib = require("fs-extra");
const chalk = require("chalk");
const prdConfig = merge(baseConfig, {
    mode: "production",
    plugins: [
        new MiniCssExtractPlugin({
            name: "static/css/[name].[hash:8].css",
            chunkFilename: "static/css/[name].[hash:8].chunk.css",
            ignoreOrder: false,
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: "all", // chunks属性用来选择分割哪些代码块，可选值有：'all'（所有代码块），'async'（按需加载的代码块），'initial'（初始化代码块）。
            minSize: 30000, // 模块的最小体积
            minChunks: 1, // 模块的最小被引用次数
            maxAsyncRequests: 5, // 按需加载的最大并行请求数
            maxInitialRequests: 3, // 一个入口最大并行请求数
            automaticNameDelimiter: '~', // 文件名的连接符
            name: true,
            /**
             * 缓存组因该是SplitChunksPlugin中最有趣的功能了。
             * 在默认设置中，会将 node_mudules 文件夹中的模块打包进一个叫 vendors的bundle中，
             * 所有引用超过两次的模块分配到 default bundle 中。更可以通过 priority 来设置优先级。
             */
            cacheGroups: { // 缓存组
                vonder: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true // 表示可以使用已经存在的块，即如果满足条件的块已经存在就使用已有的，不再创建一个新的块。
                }
            }
        },
        /**配置 runtimeChunk 会给每个入口添加一个只包含runtime的额外的代码块，
         * name 的值也可以是字符串，不过这样就会给每个入口添加相同的 runtime，
         * 配置为函数时，返回当前的entry对象，即可分入口设置不同的runtime。 */
        runtimeChunk: {
            name: entrypoint => {
                console.log("entrypoint>>>>",entrypoint.name);
                return `manifest.${entrypoint.name}`
            }
        }
    },
});
fslib.emptyDirSync(pathlib.resolve("dist"));
const startTime = new Date();
const compiler = webpack(prdConfig);
compiler.run((err, status) => {
    if (err) {
        throw new Error(err);
    }
    const endTime = new Date();
    console.log("build time:",chalk.blue(`${((endTime - startTime) / 1000).toFixed(2)}s`));
    console.log(chalk.red(`END----------`));
})