//#region Code body
/** @type {import("jest").Config} */
const config = {
	moduleNameMapper: { "\\.(css|less)$": "identity-obj-proxy" },
	testEnvironment: "jsdom"
};
//#endregion

//#region Module exports
export default config;
//#endregion