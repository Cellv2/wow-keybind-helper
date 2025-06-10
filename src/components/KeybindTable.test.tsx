import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { KeybindTable } from "./KeybindTable";

// TODO: save query cheatsheet somewhere
// https://testing-library.com/docs/react-testing-library/cheatsheet/#queries

// TODO: see if we can get this working
// https://eslint.style/rules/padded-blocks

describe("BindTable", () => {
    it.each([
        [{ abilities: ["One Ability"] }, 1],
        [
            {
                abilities: ["Ability 1", "Ability Two", "Ability Three"],
            },
            3,
        ],
    ])(
        "should have the correct number of ability rows for : %o",
        (a, expected) => {
            render(
                <KeybindTable
                    headers={["Header 1", "Header 2"]}
                    abilities={a.abilities}
                />
            );

            const matches = a.abilities.map((ability) =>
                screen.getByText(ability, { selector: "td" })
            );

            expect(matches.length).toBe(expected);
        }
    );

    it("should have the correct number of columns", () => {
        render(
            <KeybindTable headers={["Header 1", "Header 2"]} abilities={[]} />
        );

        const header1 = screen.getByText("Header 1", { selector: "th" });
        const header2 = screen.getByText("Header 2", { selector: "th" });

        expect(header1).toBeInTheDocument();
        expect(header2).toBeInTheDocument();
    });

    it("should have header cells, one for ability and one for keybind", () => {
        render(
            <KeybindTable
                headers={["AbilityTestHeader", "KeybindTestHeader"]}
                abilities={[]}
            />
        );

        // const headers = screen.getAllByRole("columnheader");
        // const headerValues = headers.map((header) => header.innerText);

        // TODO: read this + save it? https://dev.to/marktnoonan/why-i-rarely-use-getbyrole-testing-library-and-the-first-rule-of-aria-4581
        const abilityHeader = screen.getByText("AbilityTestHeader", {
            selector: "th",
        });
        const KeybindHeader = screen.getByText("KeybindTestHeader", {
            selector: "th",
        });

        expect(abilityHeader).toBeInTheDocument();
        expect(KeybindHeader).toBeInTheDocument();
    });

    it.each([
        {
            abilities: ["JustOneAbility"],
        },
        {
            abilities: [
                "Ability 1",
                "RandomAbility",
                "This One Has Spaces",
                "More Intelligence Please",
            ],
        },
        { abilities: ["Shaman Ability 1", "Shaman Ability 2"] },
    ])("should have one td for each ability : %o", (a) => {
        render(
            <KeybindTable
                headers={["abilityTestHeader", "KeybindTestHeader"]}
                abilities={a.abilities}
            />
        );

        a.abilities.forEach((ability) => {
            const match = screen.getByText(ability, { selector: "td" });

            expect(match).toBeInTheDocument();
        });
    });

    it.each([
        { abilities: ["AbilityTest"] },
        {
            abilities: ["AbilityTest", "Another Ability", "Test 3"],
        },
    ])("should have an associated keybind td for each ability : %o", (a) => {
        render(<KeybindTable headers={[]} abilities={a.abilities} />);

        a.abilities.forEach((ability) => {
            const match = screen.getByText(ability, { selector: "td" });
            const associatedKeybind = match.nextElementSibling;

            expect(associatedKeybind).not.toBeNull();
        });
    });
});
