//#region Code body
/** @type {import("jest").Config} */
const config = {
	moduleNameMapper: {
		"\\.(svg|png|gif|jpg|jpeg|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/FileMock.js",
		"\\.(css|less)$": "identity-obj-proxy"
	}, setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
	testEnvironment: "jsdom"
};
//#endregion

//#region Module exports
export default config;
//#endregion