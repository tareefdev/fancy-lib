const path = require("path");

module.exports = [
  {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"]
            }
          }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    entry: "./src/index.js",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "lib"),
      library: "tareefiyat",
      libraryTarget: "umd"
    }
  }
];
