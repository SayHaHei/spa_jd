module.exports = {
    configureWebpack: {
		devServer: {
			port: 8080,
      open: true,
      /* mock数据 */
      before(app){

      }
		}
	},

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
};
