module.exports = {
	entry: './src/app',
	output: {
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							limit: 10000,
							mimetype: 'application/font-woff',
						},
					},
				],
			},
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.mdx']
	}
};