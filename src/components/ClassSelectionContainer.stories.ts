import type { Meta, StoryObj } from "@storybook/react-vite";
import { ClassSelectionContainer } from "./ClassSelectionContainer";

const meta = {
    title: "ClassSelectionContainer",
    component: ClassSelectionContainer,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        availableClasses: [],
    },
} satisfies Meta<typeof ClassSelectionContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneClass: Story = {
    args: {
        availableClasses: ["Class One"],
    },
};

export const TwoClasses: Story = {
    args: {
        availableClasses: ["Class One", "Class Two"],
    },
};
