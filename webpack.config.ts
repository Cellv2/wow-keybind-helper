import Dotenv from "dotenv-webpack";
import ESLintPlugin from "eslint-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import webpack, { Configuration } from "webpack";

const isDevelopment = process.env.NODE_ENV === "development";

const webpackConfig = (env: any): Configuration => ({
    entry: "./src/index.tsx",
    ...(env.production || !env.development ? {} : { devtool: "eval-source-map" }),
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss"],
        plugins: [new TsconfigPathsPlugin()]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                },
                exclude: /dist/
            },
            // {
            //     test: /\.(s(a|c)ss)$/,
            //     use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            // },
            {
                test: /\.module\.s(a|c)ss$/,
                use: [
                    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: isDevelopment
                        }
                    },
                    "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                use: [
                    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env.PRODUCTION": env.production || !env.development,
            "process.env.NAME": JSON.stringify(require("./package.json").name),
            "process.env.VERSION": JSON.stringify(require("./package.json").version)
        }),
        new ForkTsCheckerWebpackPlugin(),
        new ESLintPlugin({ files: "./src/**/*.{ts,tsx,js,jsx}" }),
        new Dotenv(),
        new MiniCssExtractPlugin({
            filename: isDevelopment ? "[name].css" : "[name].[contenthash].css",
            chunkFilename: isDevelopment ? "[id].css" : "[id].[contenthash].css"
        })
    ]
});

export default webpackConfig;
