//#region External module imports
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
//#endregion

//#region Internal module imports
import App from "./App";
//#endregion

//#region Code body
describe("App", () => {
	it("renders \"Coming soon!\" as a heading.", async () => {
		// Arrange
		const expectation = /^Coming soon!$/;

		render(<App />);

		// Act
		const heading = await screen.findByRole("heading");

		// Assert
		expect(heading).toHaveTextContent(expectation);
	});

	it("renders 2 paragraphs.", async () => {
		// Arrange
		const expectation = 2;

		render(<App />);

		// Act
		const paragraphs = await screen.findAllByRole("paragraph");

		// Assert
		expect(paragraphs.length).toEqual(expectation);
	});
});
//#endregion
