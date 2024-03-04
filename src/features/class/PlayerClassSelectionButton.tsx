import { useAppDispatch } from "@src/app/hooks";
import { PlayerClass } from "@src/data/player/class/classes";
import { playerClassColorMappings } from "@src/theme/class-color-mappings";
import { fallbackTextColor, fallbackTextColorHover } from "@src/theme/fallback-color-mappings";
import React from "react";
import { setPlayerClass } from "./playerClassSelectorSlice";

export type PlayerClassSelectionProps = {
    currentClassSelection: PlayerClass;
    playerClass: PlayerClass;
};
export const PlayerClassSelectionButton = ({
    currentClassSelection,
    playerClass
}: PlayerClassSelectionProps) => {
    const dispatch = useAppDispatch();

    const targetColorMapping = playerClassColorMappings.find(
        (mapping) => mapping.playerClass === playerClass
    );
    const bgColorMapping = targetColorMapping?.themeMapping.background ?? "";
    const bgHoverColorMapping = targetColorMapping?.themeMapping.backgroundHover ?? "";
    const ringColorMapping = targetColorMapping?.themeMapping.ringColor ?? "";
    const textColorMapping = targetColorMapping?.themeMapping.textColor ?? fallbackTextColor;
    const textColorHoverMapping =
        targetColorMapping?.themeMapping.textColorOnBackgroundHover ?? fallbackTextColorHover;
    const textColorOnBackgroundMapping =
        targetColorMapping?.themeMapping.textColorOnBackground ?? fallbackTextColor;

    const isCurrentClassSelected = currentClassSelection === playerClass;
    const bgColor = isCurrentClassSelected ? bgColorMapping : bgHoverColorMapping;
    const textColor = isCurrentClassSelected ? textColorOnBackgroundMapping : textColorMapping;

    return (
        <button
            className={`last:odd:col-span-2 ring-1 ring-inset ${ringColorMapping} ${textColor} ${bgColor} ${textColorHoverMapping}`}
            onClick={() => dispatch(setPlayerClass(playerClass))}
        >
            {playerClass}
        </button>
    );
};
