import React from "react";
import { ClassAbilities, classAbilities } from "src/constants/player/abilities.consts";
import "src/components/talents/TalentSelectorGrid.module.scss";

// @ts-expect-error awd
import styles from "./TalentSelectorGrid.module";

// type TalentSelectorGridProps = {};

// export const TalentSelectorGrid = (props: TalentSelectorGridProps) => {
export const TalentSelectorGrid = () => {
    const allTalentsWithClass: Pick<ClassAbilities, "class" | "talents">[] = classAbilities.map(
        (item) => {
            return { class: item.class, talents: item.talents };
        }
    );

    const element = allTalentsWithClass.map((item) => {
        return (
            <>
                <p className={styles.red}>{item.class}</p>
                <ol>
                    {item.talents.map((talent) => (
                        <li key={talent.name}>{talent.name}</li>
                    ))}
                </ol>
            </>
        );
    });

    return <>{element}</>;
};
