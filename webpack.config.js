module.exports = {
	devtool : 'inline-source-map',
	entry : ['./client/client.js'],
	output : {
		path : './dist',
		filename : 'bundle.js',
		publicPath : '/'
	},
	module : {
		loaders : [
			{
				test : /\.js$/,
				loader : 'babel-loader',
				exclude : /node-modules/,
				//set up .bablerc file and configure it or
				query : {
					presets : ['react', 'es2015']
				}
			}
		]
	}
}
