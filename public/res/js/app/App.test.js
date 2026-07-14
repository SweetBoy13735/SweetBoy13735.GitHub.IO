//#region External module imports
import React from "react";
import { render, screen } from "@testing-library/react";
//#endregion

//#region Internal module imports
import App from "./App";
//#endregion

//#region Code body
describe("App", () => {
	it("renders a text box container to the document.", () => {
		// Arrange
		const expectation = "text box container";

		render(<App />);

		// Act
		const app = screen.getByTestId("app");

		// Assert
		expect(app).toBeInTheDocument();
		expect(app).toHaveClass(expectation);
	});

	it("contains \"Coming soon!\" as a heading.", () => {
		// Arrange
		const expectation = /^Coming soon!$/;

		render(<App />);

		// Act
		const heading = screen.getByRole("heading", { name: expectation });

		// Assert
		expect(heading).toBeInTheDocument();
	});

	it("contains 2 paragraphs.", () => {
		// Arrange
		const expectation = 2;

		render(<App />);

		// Act
		const paragraphs = screen.getAllByRole("paragraph");

		// Assert
		expect(paragraphs).toHaveLength(expectation);
	});
});
//#endregion
