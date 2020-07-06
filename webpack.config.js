module.exports = {
	entry: './src/app',
	output: {
		filename: 'bundle.js'
	},
	module: {
		stories: ["./stories/*.stories.js"],
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	}
};