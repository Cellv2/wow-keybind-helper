import { useAppDispatch, useAppSelector } from "@src/app/hooks";
import { classesAllowedInExpansions } from "@src/data/game/expansion-classes";
import { Expansion } from "@src/data/game/expansions";
import { expansionColorMappings } from "@src/theme/expansion-color-mappings";
import { fallbackTextColor, fallbackTextColorHover } from "@src/theme/fallback-color-mappings";
import React from "react";
import { selectPlayerClass, setPlayerClass } from "../class/playerClassSelectorSlice";
import { setExpansion } from "./expansionSelectorSlice";

type Props = { expansion: Expansion; currentExpansionSelection: Expansion };

export const ExpansionSelectionButton = ({ expansion, currentExpansionSelection }: Props) => {
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
    const bgColorMapping = targetColorMapping?.themeMapping.background ?? "";
    const bgHoverColorMapping = targetColorMapping?.themeMapping.backgroundHover;
    const ringColorMapping = targetColorMapping?.themeMapping.ringColor ?? "";
    const textColorMapping = targetColorMapping?.themeMapping.textColor ?? fallbackTextColor;
    const textColorOnBackgroundMapping =
        targetColorMapping?.themeMapping.textColorOnBackground ?? fallbackTextColor;
    const textColorHoverMapping =
        targetColorMapping?.themeMapping.textColorOnBackgroundHover ?? fallbackTextColorHover;

    const isCurrentSelection = expansion === currentExpansionSelection;
    const bgColor = isCurrentSelection ? bgColorMapping : bgHoverColorMapping;
    const textColor = isCurrentSelection ? textColorOnBackgroundMapping : textColorMapping;

    return (
        <button
            className={`ring-1 ring-inset ${ringColorMapping} ${textColor} ${bgColor} ${textColorHoverMapping}`}
            onClick={() => handleSetExpansionOnClick(expansion)}
        >{`${expansion.charAt(0).toUpperCase()}${expansion.slice(1)}`}</button>
    );
};

export const ExpansionSelectionButtonMemoized = React.memo(ExpansionSelectionButton);
