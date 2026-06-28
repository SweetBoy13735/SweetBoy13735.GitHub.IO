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
	it("renders a text box to the document.", async () => {
		// Arrange
		render(<App />);

		// Act
		const app = await screen.findByTestId("app");

		// Assert
		expect(app).toBeInTheDocument();
	});

	it("contains \"Coming soon!\" as a heading.", async () => {
		// Arrange
		const expectation = /^Coming soon!$/;

		render(<App />);

		// Act
		const heading = await screen.findByRole("heading");

		// Assert
		expect(heading).toHaveTextContent(expectation);
	});

	it("contains 2 paragraphs.", async () => {
		// Arrange
		const expectation = 2;

		render(<App />);

		// Act
		const paragraphs = await screen.findAllByRole("paragraph");

		// Assert
		expect(paragraphs.length).toEqual(expectation);
	});

	it("has the classes \"text box\" (Applies .5rem padding).", async () => {
		// Arrange
		const expectation = "text box";

		render(<App />);

		// Act
		const box = await screen.findByTestId("app");

		// Assert
		expect(box).toHaveClass(expectation);
	});
});
//#endregion
