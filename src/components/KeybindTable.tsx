type Props = {
    headers: string[];
    abilities: string[];
};

export const KeybindTable = (props: Props) => {
    const { abilities, headers } = props;
    // return <div>KeybindTable</div>;
    const headerElements = headers.map((header) => (
        <th key={header}>{header}</th>
    ));
    const bodyElements = abilities.map((ability) => (
        <tr>
            <td key={`${ability}Name`}>{ability}</td>
            <td key={`${ability}Bind`}></td>
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>{headerElements}</tr>
            </thead>
            <tbody>{bodyElements}</tbody>
        </table>
    );
};
