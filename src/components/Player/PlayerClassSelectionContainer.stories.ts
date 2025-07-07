import type { Meta, StoryObj } from "@storybook/react-vite";
import { PlayerClassSelectionContainer } from "./PlayerClassSelectionContainer";

const meta = {
    title: "PlayerClassSelectionContainer",
    component: PlayerClassSelectionContainer,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        availableClasses: [],
    },
} satisfies Meta<typeof PlayerClassSelectionContainer>;

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
