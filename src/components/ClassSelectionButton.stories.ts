import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ClassSelectionButton } from "./ClassSelectionButton";

const meta = {
    title: "ClassSelectionButton",
    component: ClassSelectionButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        className: {
            type: "string",
        },
    },
    args: {
        className: "Test Class",
        handleSetActiveClass: fn(),
    },
} satisfies Meta<typeof ClassSelectionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
    args: {
        isActive: true,
    },
};

export const NotActive: Story = {
    args: {
        isActive: false,
    },
};
