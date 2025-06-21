import { ClassSelectionButton } from "./ClassSelectionButton";

type Props = {
    availableClasses: string[];
};

export const ClassSelectionContainer = (props: Props) => {
    const classComponents = props.availableClasses.map((availableClass) => (
        <ClassSelectionButton
            className={availableClass}
            handleSetActiveClass={() => {}}
        />
    ));

    return <>{classComponents}</>;
};
