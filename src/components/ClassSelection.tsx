type Props = {
    className: string;
    handleSetActiveClass: () => void;
};

export const ClassSelection = (props: Props) => {
    const { className, handleSetActiveClass } = props;

    return (
        <button onClick={handleSetActiveClass} title={className}>
            {className}
        </button>
    );
};
