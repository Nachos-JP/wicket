const path = require("path");

const environment = process.env.NODE_ENV ?? "development";

module.exports = {
  mode: environment,
  entry: path.resolve(__dirname, "/src/js/index.js"),
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: 3,
                },
              ],
            ],
            plugins: [
              "@babel/plugin-proposal-class-properties",
            ],
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "wicket.js",
    library: "Wicket",
    libraryExport: "default",
    libraryTarget: "umd",
    globalObject: "this",
  },
};
