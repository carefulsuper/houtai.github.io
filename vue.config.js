const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
	lintOnSave:false,
 devServer: {
     open: true,
     proxy: {
         '/api': {
             target: 'http://1.116.64.64:5004/api2/',
             changeOrigin: true,
             pathRewrite: {
                 '^/api': ''
             }
         }
     }
 }
})
