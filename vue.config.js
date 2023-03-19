const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		historyApiFallback: true,
		allowedHosts: "all",
	},
  publicPath: process.env.NODE_ENV === 'production' ? '/chat-vue/' : '/'
});
