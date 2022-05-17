function app(a, b) {
  return a + b;
}

// 다른 파일에서도 사용할수있도록 exports함
module.exports = app;
