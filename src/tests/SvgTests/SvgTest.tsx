import TestFiles from "./test-files.svg?react";
import TestTubes from "./test-tubes.svg?react";

type SvgTestProps = {
    options: "Files" | "Tubes";
};

export const SvgTest = (props: SvgTestProps) => {
    const { options } = props;

    return <div>{options === "Files" ? <TestFiles /> : <TestTubes />}</div>;
};
