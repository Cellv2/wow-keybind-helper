/**
 * @jest-environment jsdom
 */

import React from "react";
import {render, screen} from "@testing-library/react";
import HelloWorld from "./HelloWorld";
import "@testing-library/jest-dom";

test("renders correct title", () => {
    render(<HelloWorld title="Hello World" />);
    const headerText = screen.getByText(/Hello World/i);
    expect(headerText).toBeInTheDocument();
});
