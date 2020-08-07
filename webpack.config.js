const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
	mode: "development",
  entry: {
		"simpleBundle": './src/js/index.js',
	},
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
		  {
		    test: /\.css$/,
		    use: [
		      'style-loader',
		      'css-loader',
		    ],
		  },
		],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({ template: './src/index.html'}),
	],
};


module.exports = config;