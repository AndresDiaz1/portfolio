const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    devtool: "inline-source-map",
    entry: "./src/index.tsx",
    output: {
      path: __dirname + "/build",
      filename: "bundle.js",
    },
    devServer: {
      inline: true,
      contentBase: "./build",
      port: 3000,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" },
        { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
      ],
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'www/index.html'),
            to: path.resolve(__dirname, 'build')
          },
          {
            from: path.resolve(__dirname, 'assets', '**', '*'),
            to: path.resolve(__dirname, 'build')
          }
        ]
      })
    ],
  };