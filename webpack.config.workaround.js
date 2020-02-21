module.exports = {
	mode: 'development',
	entry: [
		'core-js/es/array/iterator',
		'./main.js'
	],
	output: {filename: './main.workaround.js'},
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