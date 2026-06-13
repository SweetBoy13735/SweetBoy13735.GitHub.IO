//#region External module imports
const { merge } = require("webpack-merge");
//#endregion

//#region Internal module imports
const Common = require("./webpack.common.js");
//#endregion

//#region Code body
/** @type {import("webpack").Configuration} */
const devConfig = {
	mode: "development",
	devServer: {
		static: "./public",
		hot: true,
		liveReload: true
	}, devtool: "inline-source-map",
	module: {
		rules: [{
				test: /\.css$/i,
				use: ["style-loader", {
						loader: "css-loader",
						options: {
							modules: { localIdentName: "[path][name]_[local]" },
							esModule: false
						}
				}]
		}]
	}
};
//#endregion

//#region Module exports
module.exports = merge(Common, devConfig);
//#endregion
