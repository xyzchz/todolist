module.exports = {
  devServer: {
    open: true,
    port: 8080,
    logLevel: 'debug',
    proxy: {
      '/v1': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        pathRewrite: {
          '^/v1': '/v1'
        }
      }
    }
  }
}