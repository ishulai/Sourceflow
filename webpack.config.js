const path = require('path');

module.exports = {
	entry: path.join(__dirname, "src", "scripts", "main.jsx"),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, "public", "scripts")
	},
	module : {
		loaders : [
			{
				test : /\.jsx?/,
				include : path.resolve(__dirname),
				loader : 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
			},
            {
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: 'src/stylesheets/fonts/[name].[ext]'
				}
            }
		]
	}
};