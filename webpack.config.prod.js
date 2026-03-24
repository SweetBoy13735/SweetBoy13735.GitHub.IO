//#region External module imports
const { merge } = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
//#endregion

//#region Internal module imports
const common = require("./webpack.common.js");
//#endregion

//#region Module exports
module.exports = merge(common, {
	mode: "production",
	plugins: [
		new HTMLWebpackPlugin({ template: "./public/index.html" }),
		new CopyPlugin({ patterns: [
			{ from: "public/res/css", to: "res/css" },
			{ from: "public/res/js/vendor", to: "res/js/vendor" },
			{ from: "public/res/assets/img", to: "res/assets/img" },
			{ from: "public/404.html", to: "404.html" },
			{ from: "public/favicon.ico", to: "favicon.ico" },
			{ from: "public/robots.txt", to: "robots.txt" },
			{ from: "public/site.webmanifest", to: "site.webmanifest" },
		]})
	]
});
//#endregion
