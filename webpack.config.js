var path = require('path');

module.exports = {
	mode: 'development',
	entry: './client/index.jsx',
	output: {
		path: path.resolve(__dirname, './public'),
		publicPath: '/',
		filename: 'script.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				options: {
					presets:["env", "stage-0", "react"]
				}
			},

			{
				test: /\.less$/,
				exclude: /(node_modules)/,
				use:[
					'style-loader',
					'css-loader',
					'less-loader'
				],
			},
		]
	},
	devServer: {
		historyApiFallback: true,
	}
}