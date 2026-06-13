//#region External module imports
const Path = require("node:path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
//#endregion

//#region Code body
/** @type {import("webpack").Configuration} */
const commonConfig = {
	entry: { index: "./public/res/js/index.js" },
	output: {
		filename: "[name].bundle.js",
		path: Path.resolve(__dirname, "dist"),
		clean: true
	}, plugins: [new HTMLWebpackPlugin({ template: "./public/index.html" })],
	module: {
		rules: [{
				test: /\.(svg|png|gif|jpg|jpeg)$/i,
				type: "asset/resource"
			}, {
				test: /\.(m?js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
				}
		}]
	}, resolve: { extensions: [".jsx", "..."] }
};
//#endregion

//#region Module exports
module.exports = commonConfig;
//#endregion
