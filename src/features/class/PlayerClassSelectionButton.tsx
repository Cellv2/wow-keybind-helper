import { useAppDispatch } from "@src/app/hooks";
import { PlayerClass } from "@src/data/player/class/classes";
import { playerClassColorMappings } from "@src/theme/class-color-mappings";
import { fallbackTextColor, fallbackTextColorHover } from "@src/theme/fallback-color-mappings";
import React from "react";
import { setPlayerClass } from "./playerClassSelectorSlice";

export type PlayerClassSelectionProps = {
    class: PlayerClass;
};
export const PlayerClassSelectionButton = (props: PlayerClassSelectionProps) => {
    const dispatch = useAppDispatch();

    const targetColorMapping = playerClassColorMappings.find(
        (mapping) => mapping.playerClass === props.class
    );
    const bgHoverColor = targetColorMapping?.themeMapping.backgroundHover;
    const ringColor = targetColorMapping?.themeMapping.ringColor ?? "";
    const textColor = targetColorMapping?.themeMapping.textColor ?? fallbackTextColor;
    const textColorHover =
        targetColorMapping?.themeMapping.textColorOnBackgroundHover ?? fallbackTextColorHover;

    return (
        <button
            className={`last:odd:col-span-2 ring-1 ring-inset ${ringColor} ${textColor} ${bgHoverColor} ${textColorHover}`}
            onClick={() => dispatch(setPlayerClass(props.class))}
        >
            {props.class}
        </button>
    );
};
