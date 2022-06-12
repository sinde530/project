// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        // 정규표현식 참고
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
