import {
    findByTitle,
    getByTitle,
    render,
    waitFor,
} from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SvgTest } from "./SvgTest";

describe("SvgTest", () => {
    it("renders the files svg when selected", () => {
        const { container } = render(<SvgTest options="Files" />);

        expect(getByTitle(container, "Files")).toBeInTheDocument();
        waitFor(() =>
            expect(findByTitle(container, "Tubes")).not.toBeInTheDocument()
        );
    });

    it("renders the tubes component when selected", () => {
        const { container } = render(<SvgTest options="Tubes" />);

        expect(getByTitle(container, "Tubes")).toBeInTheDocument();
        waitFor(() =>
            expect(findByTitle(container, "Files")).not.toBeInTheDocument()
        );
    });
});
