//#region External module imports
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
//#endregion

//#region Internal module imports
const Common = require("./webpack.common.js");
//#endregion

//#region Code body
// Set @babel/preset-react development mode to false.
Common.module.rules[1].use[0].options.presets[1][1].development = false;

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
	] })], devtool: "source-map",
	module: {
		generator: {
			"css/auto": { localIdentName: "[local]_[hash:base64url]" }
	} }
};
//#endregion

//#region Module exports
module.exports = merge(Common, prodConfig);
//#endregion
