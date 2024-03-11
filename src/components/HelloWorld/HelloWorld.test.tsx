/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import React from "react";
import { renderWithProviders } from "../../test-utils";
import HelloWorld from "./HelloWorld";

// https://redux.js.org/usage/writing-tests#writing-integration-tests-with-components
// https://redux.js.org/usage/writing-tests#preparing-initial-test-state

test("renders correct title", () => {
    renderWithProviders(<HelloWorld title="Hello World" />);
    const headerText = screen.getByText(/Hello World/i);
    expect(headerText).toBeInTheDocument();
});
