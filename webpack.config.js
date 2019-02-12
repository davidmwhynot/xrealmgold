const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	output: { filename: 'app.js' },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader'
			}
		]
	}
}
