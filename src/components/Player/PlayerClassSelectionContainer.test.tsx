import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PlayerClassSelectionContainer } from "./PlayerClassSelectionContainer";

describe("PlayerClassSelectionContainer", () => {
    it("should contain the correct selection buttons", () => {
        const classNames = ["Class 1", "Class 2"];

        render(<PlayerClassSelectionContainer availableClasses={classNames} />);
        screen.debug();

        for (const className of classNames) {
            const match = screen.getByTitle(className);
            expect(match).toBeInTheDocument();
        }
    });
});
