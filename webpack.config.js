module.exports = {
  mode: 'production',
  entry: './pages/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"
        }
      ]
    }
    ]
  },
  performance: {
    hints: false
  },
  resolve: {
  fallback: {
   fs: false,
   'stream': require.resolve('stream-browserify'),
   'buffer': require.resolve('buffer/'),
   'util': require.resolve('util/'),
   'assert': require.resolve('assert/'),
   'http': require.resolve('stream-http/'),
   'url': require.resolve('url/'),
   'https': require.resolve('https-browserify/'),
   'os': require.resolve('os-browserify/'),
   "crypto": require.resolve("crypto-browserify")
 }
}
};
