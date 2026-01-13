const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://generateapi.techsnack.online',
      changeOrigin: true,
      secure: false,
      logLevel: 'debug'
    })
  );
};