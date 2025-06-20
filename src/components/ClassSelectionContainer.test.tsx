import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ClassSelectionContainer } from "./ClassSelectionContainer";

describe("ClassSelectionContainer", () => {
    it("should contain the correct selection buttons", () => {
        const classNames = ["Class 1", "Class 2"];

        render(<ClassSelectionContainer classNames={classNames} />);

        for (const className of classNames) {
            const match = screen.getByTitle(className);
            expect(match).toBeInTheDocument();
        }
    });
});
