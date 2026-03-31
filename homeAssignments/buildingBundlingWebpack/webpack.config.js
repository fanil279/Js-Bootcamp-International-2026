const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js',

	output: {
		filename: 'js/[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		assetModuleFilename: 'assets/[name][ext]',
	},

	devtool: 'source-map',

	resolve: {
		extensions: ['.ts', '.js'],
	},

	module: {
		rules: [
			{
				test: /\.[jt]s$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									targets: {
										ie: '11',
									},
								},
							],
							'@babel/preset-typescript',
						],
					},
				},
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.(png|jpe?g|gif|svg|webp)$/i,
				type: 'asset/resource',
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: true,
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash].css',
		}),
	],

	optimization: {
		minimizer: ['...', new CssMinimizerPlugin()],
	},
};
