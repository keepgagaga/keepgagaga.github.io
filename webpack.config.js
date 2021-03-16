const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/react/index.js',
  module: {
    rules: [
        {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
        },
        {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
        }
    ]
  },
  resolve: {
      extensions: ["*", ".js", ".jsx"]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/react/'),
    publicPath: "/dist/react/"
  },
  devServer: {
    contentBase: path.join(__dirname, "./"),
    port: 3000,
    publicPath: "http://localhost:3000/public/react",
    hotOnly: true,
    hot: true,
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
  devtool: "cheap-source-map"
}