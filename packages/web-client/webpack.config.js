const path = require("path");

module.exports = {
  entry: {index: "./src/root.tsx"},
  output: {
    path: path.resolve("..", "dist/"),
    filename: "bundle.js"
  },
  resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]
      // }
    ]
  }
};