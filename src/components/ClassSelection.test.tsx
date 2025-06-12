import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import { ClassSelection } from "./ClassSelection";

describe("ClassSelection", () => {
    it("should display the correct class", () => {
        render(
            <ClassSelection
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
            <ClassSelection
                handleSetActiveClass={handleClick}
                className="My Class"
            />
        );

        const match = screen.getByTitle("My Class");
        fireEvent.click(match);

        expect(handleClick).toHaveBeenCalledOnce();
    });
});
