//#region External module imports
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
//#endregion

//#region Internal module imports
const Common = require("./webpack.common.js");
//#endregion

//#region Code body
/** @type {import("webpack").Configuration} */
const prodConfig = {
	mode: "production",
	plugins: [new CopyWebpackPlugin({ patterns: [
				{ from: "./public/404.html", to: "404.html" },
				{ from: "./public/favicon.ico", to: "favicon.ico" },
				{ from: "./public/robots.txt", to: "robots.txt" },
				{ from: "./public/res/css", to: "res/css" },
				{ from: "./public/res/js/vendor", to: "res/js/vendor" },
				{ from: "./public/res/assets", to: "res/assets" }
	] }), new MiniCSSExtractPlugin()],
	devtool: "source-map",
	module: {
		rules: [{
				test: /\.css$/i,
				use: [MiniCSSExtractPlugin.loader, {
						loader: "css-loader",
						options: {
							modules: { localIdentName: "[local]_[hash:base64]" },
							esModule: false
						}
				}]
		}]
	}
};
//#endregion

//#region Module exports
module.exports = merge(Common, prodConfig);
//#endregion
