import React, { useState } from "react";

type KeyModifierState = {
    isShiftPressed: boolean;
    isCtrlPressed: boolean;
    isAltPressed: boolean;
    isCmdPressed: boolean;
};

const initialKeyModState: KeyModifierState = {
    isAltPressed: false,
    isCmdPressed: false,
    isCtrlPressed: false,
    isShiftPressed: false
};

// type: React.ModifierKey
const blockedKeys: string[] = ["Alt", "AltGraph", "Control", "Meta", "Shift"];

export const KeypressInputAndDisplay = () => {
    const [keyCombination, setKeyCombination] = useState<string>("");
    const [modifiers, setModifiers] = useState<KeyModifierState>(initialKeyModState);

    const convertModifiersToString = (modifiers: KeyModifierState) => {
        let string = "";
        if (modifiers.isShiftPressed) {
            string = `${string} Shift + `;
        }

        if (modifiers.isCtrlPressed) {
            string = `${string} Ctrl + `;
        }

        if (modifiers.isCmdPressed) {
            string = `${string} Cmd + `;
        }

        if (modifiers.isAltPressed) {
            string = `${string} Alt + `;
        }

        return string;
    };

    const handleInputOnKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // don't want copy-pasting (etc.) in here
        event.preventDefault();

        event.persist();

        const update: KeyModifierState = {
            isAltPressed: event.altKey,
            isCmdPressed: event.metaKey,
            isCtrlPressed: event.ctrlKey,
            isShiftPressed: event.shiftKey
        };

        setModifiers(update);

        if (blockedKeys.includes(event.key)) {
            return;
        }

        setKeyCombination(event.key.toUpperCase());
    };

    return (
        <>
            <br />
            <p>{`${convertModifiersToString(modifiers)} ${keyCombination}`}</p>
            <input className="text-black" type="text" onKeyDown={(e) => handleInputOnKeydown(e)} />
            <br />
        </>
    );
};
