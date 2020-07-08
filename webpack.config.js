module.exports = {
	entry: './src/app',
	output: {
		filename: 'bundle.js'
	},
	module: {
		stories: ["./stories/*.stories.(js|mdx)", "./src/components/**/*.stories.(js|mdx)"],
		
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.mdx$/,
				exclude: /node_modules/,
				use: ['babel-loader', '@mdx-js/loader']

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