var path = require('path')

module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./js/app.js",
    html: "./index.html",
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js",
    publicPath: 'public'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query:{presets:['es2015','react']}
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  }
};
