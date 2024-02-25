import { useAppDispatch, useAppSelector } from "@src/app/hooks";
import { classesAllowedInExpansions } from "@src/data/game/expansion-classes";
import { Expansion } from "@src/data/game/expansions";
import { expansionColorMappings } from "@src/theme/expansion-color-mappings";
import { fallbackTextColor, fallbackTextColorHover } from "@src/theme/fallback-color-mappings";
import React from "react";
import { selectPlayerClass, setPlayerClass } from "../class/playerClassSelectorSlice";
import { setExpansion } from "./expansionSelectorSlice";

type Props = { expansion: Expansion };

export const ExpansionSelectionButton = ({ expansion }: Props) => {
    const dispatch = useAppDispatch();
    const selectedPlayerClass = useAppSelector(selectPlayerClass);

    const handleSetExpansionOnClick = (expansionSelection: Expansion) => {
        // should be fine, there shouldn't be duplicate expansion names
        const selectedExpansionAllowedClasses = classesAllowedInExpansions.filter(
            (item) => item.expansion === expansionSelection
        )[0].allowedClasses;

        // we make sure that the class is actually allowed in the expansion we pick
        if (!selectedExpansionAllowedClasses.includes(selectedPlayerClass)) {
            dispatch(setPlayerClass(selectedExpansionAllowedClasses[0]));
        }

        dispatch(setExpansion(expansionSelection));
    };

    const targetColorMapping = expansionColorMappings.find(
        (mapping) => mapping.expansion === expansion
    );
    console.log(targetColorMapping);
    const bgHoverColor = targetColorMapping?.tailwindThemeOptions.backgroundHover;
    const ringColor = targetColorMapping?.tailwindThemeOptions.ringColor ?? "";
    const textColor = targetColorMapping?.tailwindThemeOptions.textColor ?? fallbackTextColor;
    const textColorHover =
        targetColorMapping?.tailwindThemeOptions.textColorOnBackgroundHover ??
        fallbackTextColorHover;

    return (
        <button
            className={`ring-1 ring-inset ${ringColor} ${textColor} ${bgHoverColor} ${textColorHover}`}
            onClick={() => handleSetExpansionOnClick(expansion)}
        >{`${expansion.charAt(0).toUpperCase()}${expansion.slice(1)}`}</button>
    );
};

export const ExpansionSelectionButtonMemoized = React.memo(ExpansionSelectionButton);
