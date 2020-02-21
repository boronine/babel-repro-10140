module.exports = {
	mode: 'development',
	entry: './main.js',
	output: {filename: './main.broken.js'},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								"@babel/preset-env", 
								{
									useBuiltIns: "usage",
									corejs: 3,
									targets: 'IE 11',
									ignoreBrowserslistConfig: true
								}
							]
						]
					}
				}
			}
		]
	}
}