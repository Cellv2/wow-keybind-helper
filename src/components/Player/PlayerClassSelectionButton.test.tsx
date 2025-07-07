import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import { PlayerClassSelectionButton } from "./PlayerClassSelectionButton";

describe("PlayerClassSelectionButton", () => {
    it("should display the correct class", () => {
        render(
            <PlayerClassSelectionButton
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
            <PlayerClassSelectionButton
                handleSetActiveClass={handleClick}
                className="My Class"
            />
        );

        const match = screen.getByTitle("My Class");
        fireEvent.click(match);

        expect(handleClick).toHaveBeenCalledOnce();
    });

    it("should have the correct active state when isActive is true", () => {
        const isActive = true;

        render(
            <PlayerClassSelectionButton
                handleSetActiveClass={() => {}}
                className="My Class"
                isActive={isActive}
            />
        );

        const match = screen.getByTitle("My Class");
        expect(match.classList).toContain("active");
    });

    it("should have the correct active state when isActive is false", () => {
        const isActive = false;

        render(
            <PlayerClassSelectionButton
                handleSetActiveClass={() => {}}
                className="My Class"
                isActive={isActive}
            />
        );

        const match = screen.getByTitle("My Class");
        expect(match.classList).not.toContain("active");
    });
});
