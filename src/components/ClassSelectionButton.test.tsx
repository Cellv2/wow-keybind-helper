import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import { ClassSelectionButton } from "./ClassSelectionButton";

describe("ClassSelectionButton", () => {
    it("should display the correct class", () => {
        render(
            <ClassSelectionButton
                handleSetActiveClass={() => {}}
                className="OP Class"
            />
        );

        const match = screen.getByTitle("OP Class");
        expect(match).toBeInTheDocument();
    });

    it("should call a function to set active class on click", () => {
        const handleClick = vitest.fn();

        render(
            <ClassSelectionButton
                handleSetActiveClass={handleClick}
                className="My Class"
            />
        );

        const match = screen.getByTitle("My Class");
        fireEvent.click(match);

        expect(handleClick).toHaveBeenCalledOnce();
    });
});
