type Props = {
    className: string;
    handleSetActiveClass: () => void;
    isActive?: boolean;
};

export const ClassSelectionButton = (props: Props) => {
    const { className, handleSetActiveClass, isActive = false } = props;

    const componentClasses = ["size-16", "bg-sky-500/50"];
    if (isActive) {
        componentClasses.push("active");
    }

    return (
        <button
            className={componentClasses.join(" ")}
            onClick={handleSetActiveClass}
            title={className}
        >
            {className}
        </button>
    );
};
