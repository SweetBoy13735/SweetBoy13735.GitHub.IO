//#region Code body
/** @type {import("jest").Config} */
const config = {
	moduleFileExtensions: ["jsx", "js"],
	moduleNameMapper: {
		"\\.(svg|webp|png|gif|jpg|jpeg|webm|mp4|wav|mp3|m4a|aac|oga|woff2|woff|eot|otf|ttf)$": "<rootDir>/__mocks__/file-mock.js",
		"\\.css$": "identity-obj-proxy"
	}, setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
	testEnvironment: "jsdom"
};
//#endregion

//#region Module exports
export default config;
//#endregion