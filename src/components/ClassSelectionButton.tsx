type Props = {
    className: string;
    handleSetActiveClass: () => void;
    isActive?: boolean;
};

export const ClassSelectionButton = (props: Props) => {
    const { className, handleSetActiveClass, isActive = false } = props;

    const componentClasses = ["size-16", "bg-sky-500/50", "w-12", "h-12"];
    if (isActive) {
        componentClasses.push("active");
    }

    return (
        <button
            className={componentClasses.join(" ")}
            // style={{height: "24px", width: "24px"}}
            onClick={handleSetActiveClass}
            title={className}
        >
            {className}
        </button>
    );
};
