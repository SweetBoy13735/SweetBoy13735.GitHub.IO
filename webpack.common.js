//#region External module imports
const Path = require("node:path");
//#endregion

//#region Module exports
module.exports = {
	entry: { app: "./public/res/js/app.js" },
	output: {
		path: Path.resolve(__dirname, "dist"),
		clean: true,
		filename: "./res/js/app.js",
	}
};
//#endregion
