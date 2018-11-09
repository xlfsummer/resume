let r = p => require("path").resolve(__dirname, p);
let VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;
let CleanWebpackPlugin = require("clean-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let HotModuleReplacementPlugin = require("webpack").HotModuleReplacementPlugin;

/** @type {import("webpack").Configuration & import("webpack-dev-server").Configuration} */
let conf = {
    mode: "development",
    entry: {
        "script": r("../src/index.ts")
    },
    output: {
        filename: "script.[hash:4].js",
        path: r("../dist"),
        publicPath: ""
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".data"]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                    options: {
                        parser: "vue-template-compiler"
                    }
                }
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript"],
                        /**
                         * Default false. When set, the given directory will be used to cache the results of the loader. Future webpack builds will attempt to read from the cache to avoid needing to run the potentially expensive Babel recompilation process on each run. If the value is blank (loader: 'babel-loader?cacheDirectory') or true (loader: 'babel-loader?cacheDirectory=true'), the loader will use the default cache directory in node_modules/.cache/babel-loader or fallback to the default OS temporary file directory if no node_modules folder could be found in any root directory.
                         */
                        cacheDirectory: true,
                        plugins: [
                            ["@babel/plugin-proposal-optional-chaining"]
                        ]
                    }
                }
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            // https://github.com/Microsoft/TypeScript-Vue-Starter#single-file-components
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    },
                    // {
                    //     loader: "babel-loader",
                    //     options: {
                    //         presets: ["@babel/preset-env", "@babel/preset-typescript"],
                    //         /**
                    //          * Default false. When set, the given directory will be used to cache the results of the loader. Future webpack builds will attempt to read from the cache to avoid needing to run the potentially expensive Babel recompilation process on each run. If the value is blank (loader: 'babel-loader?cacheDirectory') or true (loader: 'babel-loader?cacheDirectory=true'), the loader will use the default cache directory in node_modules/.cache/babel-loader or fallback to the default OS temporary file directory if no node_modules folder could be found in any root directory.
                    //          */
                    //         cacheDirectory: true,
                    //         plugins: [
                    //             ["@babel/plugin-proposal-optional-chaining"]
                    //         ]
                    //     }
                    // }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: "file-loader"
            },
            {
                test: /\.data$/,
                use: "raw-loader"
            }
        ]
    },
    devServer: {
        // hot: true,
        publicPath: "",
        contentBase: r("../dist")
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: r("../src/index.html"),
        }),
        new CleanWebpackPlugin(r("../dist"), {
            root: r("..")
        }),
        new MiniCssExtractPlugin({
            filename: "style.[contenthash:4].css",
        }),
        new HotModuleReplacementPlugin({})
    ]
};

module.exports = conf;
