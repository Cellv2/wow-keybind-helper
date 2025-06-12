import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ClassSelection } from "./ClassSelection";

describe("ClassSelection", () => {
    it("should display the correct class", () => {
        render(<ClassSelection className="OP Class" />);

        const match = screen.getByTitle("OP Class");
        expect(match).toBeInTheDocument();
    });

    it("should call a function to set active class on click", () => {
        render(<ClassSelection className="My Class" />);

        // TODO: finish this
        // https://testing-library.com/docs/dom-testing-library/api-events
        const match = screen.getByTitle("My Class");
        fireEvent.click(match);
    });
});
