import { queryByTestId, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
    it("renders the App component", () => {
        render(<App />);

        // https://testing-library.com/docs/dom-testing-library/cheatsheet/#text-match-options
        // https://vitest.dev/api/

        const viteReactElement = screen.getByText("Vite + React");
        expect(viteReactElement).toBeInTheDocument();

        expect(
            queryByTestId(document.documentElement, "does-not-exist"),
        ).not.toBeInTheDocument();

        // screen.debug(); // prints out the jsx in the App component unto the command line
    });
});

describe("A truthy statement", () => {
    it("should be equal to 2", () => {
        expect(1 + 1).toEqual(2);
    });
});
