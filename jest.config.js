//#region Code body
/** @type {import("jest").Config} */
const config = {
	moduleFileExtensions: ["jsx", "js"],
	moduleNameMapper: {
		"\\.(svg|png|gif|jpg|jpeg|otf|ttf|eot|webp|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file-mock.js",
		"\\.css$": "identity-obj-proxy"
	}, setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
	testEnvironment: "jsdom"
};
//#endregion

//#region Module exports
export default config;
//#endregion