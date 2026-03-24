//#region External module imports
const { merge } = require("webpack-merge");
//#endregion

//#region Internal module imports
const common = require("./webpack.common.js");
//#endregion

//#region Module exports
module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		liveReload: true,
		hot: true,
		open: true,
		static: ["./public"]
	}
});
//#endregion
