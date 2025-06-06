import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { KeybindTable } from "./KeybindTable";

// TODO: save query cheatsheet somewhere
// https://testing-library.com/docs/react-testing-library/cheatsheet/#queries

// TODO: see if we can get this working
// https://eslint.style/rules/padded-blocks

describe("BindTable", () => {
    it.todo("should have the number of rows", () => {
        render(<KeybindTable />);
    });

    it.todo("should have the correct number of columns", () => {});

    it("should have header cells, one for ability and one for keybind", () => {
        render(<KeybindTable />);

        // const headers = screen.getAllByRole("columnheader");
        // const headerValues = headers.map((header) => header.innerText);

        // TODO: read this + save it? https://dev.to/marktnoonan/why-i-rarely-use-getbyrole-testing-library-and-the-first-rule-of-aria-4581
        const abilityHeader = screen.getByText("Ability", { selector: "th" });
        const KeybindHeader = screen.getByText("Keybind", { selector: "th" });

        expect(abilityHeader).toBeInTheDocument();
        expect(KeybindHeader).toBeInTheDocument();

        // expect(headers.length).toBe(2);
        // expect(headerValues.sort()).toEqual(["Ability", "Keybind"].sort());
    });

    it.todo.each([
        "Blink",
        "Cone of Cold",
        "Arcane Explosion",
        "Arcane Intellect",
    ])("should have %s in the table cells", (ability) => {
        render(<KeybindTable />);

        const match = screen.getByText(ability, { selector: "td" });

        expect(match).toBeInTheDocument();
    });
});
