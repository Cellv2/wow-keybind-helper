import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

// this is a comment
describe("test framework", () => {
    it("should work with a simple test", () => {
        expect(1 + 1).toEqual(2);
    });
});

describe("App", () => {
    it("renders the App component", () => {
        render(<App />);

        screen.debug(); // prints out the jsx in the App component unto the command line
    });
});
