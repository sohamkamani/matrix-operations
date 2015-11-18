module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "build.js"
  },
  devtool: 'sourcemap',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel'
    }]
  }
};
