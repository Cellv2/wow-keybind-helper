type Props = {
    className: string;
    handleSetActiveClass: () => void;
};

export const ClassSelectionButton = (props: Props) => {
    const { className, handleSetActiveClass } = props;

    return (
        <button
            className="size-16 bg-sky-500/50"
            onClick={handleSetActiveClass}
            title={className}
        >
            {className}
        </button>
    );
};
