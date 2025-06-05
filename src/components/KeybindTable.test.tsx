import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { KeybindTable } from "./KeybindTable";

describe("BindTable", () => {
    it("should have the number of rows passed in", () => {
        render(<KeybindTable />);
    });

    it("should have header cells, one for ability and one for keybind", () => {
        render(<KeybindTable />);

        const headers = screen.getAllByRole("columnheader");
        const headerValues = headers.map((header) => header.innerText);

        expect(headers.length).toBe(2);
        expect(headerValues.sort()).toEqual(["Abilities", "Keybind"].sort());
    });

    it("should have the correct number of columns", () => {});
});
