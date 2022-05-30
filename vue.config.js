const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
      },
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://152.136.185.210:4000',
          pathRewrite: {
            '^/api': '',
          },
          changeOrigin: true,
        },
      },
    },
  },
});
