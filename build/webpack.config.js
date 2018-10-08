let r = p => require("path").resolve(__dirname, p);
let VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;
let CleanWebpackPlugin = require("clean-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import("webpack").Configuration & import("webpack-dev-server").Configuration} */
let conf = {
    mode: "development",
    entry: {
        "script": r("../src/index.js")
    },
    output: {
        filename: "script.[contenthash:4].js",
        path: r("../dist"),
        publicPath: ""
    },
    resolve: {
        extensions: [".ts", ".vue"]
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
            // {
            //     test: /\.ts$/,
            //     use: {
            //         loader: "awesome-typescript-loader"
            //     }
            // },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                            /**
                             * Default false. When set, the given directory will be used to cache the results of the loader. Future webpack builds will attempt to read from the cache to avoid needing to run the potentially expensive Babel recompilation process on each run. If the value is blank (loader: 'babel-loader?cacheDirectory') or true (loader: 'babel-loader?cacheDirectory=true'), the loader will use the default cache directory in node_modules/.cache/babel-loader or fallback to the default OS temporary file directory if no node_modules folder could be found in any root directory.
                             */
                            cacheDirectory: true
                        }
                    },
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        /**
                         * Default false. When set, the given directory will be used to cache the results of the loader. Future webpack builds will attempt to read from the cache to avoid needing to run the potentially expensive Babel recompilation process on each run. If the value is blank (loader: 'babel-loader?cacheDirectory') or true (loader: 'babel-loader?cacheDirectory=true'), the loader will use the default cache directory in node_modules/.cache/babel-loader or fallback to the default OS temporary file directory if no node_modules folder could be found in any root directory.
                         */
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                ]
            }
        ]
    },
    devServer: {
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
        })
    ]
};

module.exports = conf;
