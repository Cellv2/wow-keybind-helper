import { PlayerClassSelectionButton } from "./PlayerClassSelectionButton";

type Props = {
    availableClasses: string[];
};

export const PlayerClassSelectionContainer = (props: Props) => {
    const classComponents = props.availableClasses.map((availableClass) => (
        <PlayerClassSelectionButton
            className={availableClass}
            handleSetActiveClass={() => {}}
        />
    ));

    return <>{classComponents}</>;
};
