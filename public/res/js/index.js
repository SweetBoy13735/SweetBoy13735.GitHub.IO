//#region External module imports
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//#endregion

//#region Internal module imports
import App from "./app/App";
//#endregion

//#region Code body
const appRoot = createRoot(document.getElementById("app-root") || document.body);

appRoot.render(<StrictMode>
	<App />
</StrictMode>);
//#endregion
