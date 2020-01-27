// Note: If a webpack.config.js is present, the webpack command picks it up by default. Otherwise use the --config option.
// Mode (prod/dev) and/or use of the dev-server is set in package.json scripts obj.

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  watch: true,
  // standard options:
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  // webpack-dev-server:
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      // Babel (ES6/React -> ES5)
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      // CSS
      {
        test: /\.css$/, // ex: main.js -> import './style.css'
        use: ["style-loader", "css-loader"] // npm install --save-dev style-loader css-loader
      },
      // Images
      {
        test: /\.(png)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "images",
            resourcePath: "assets/images"
            // name: "[name].[ext]" // Uncomment to preserve original file name.
          }
        }
      },
      // Fonts
      {
        test: /\.(ttf)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "fonts",
            resourcePath: "assets/fonts"
            // name: "[name].[ext]" // Uncomment to preserve original file name.
          }
        }
      }
    ]
  },
  // Generates an HTML file for your application by injecting automatically all your generated bundles.
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
};
