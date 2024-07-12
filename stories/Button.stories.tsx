import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../package/components/form/Button";

const meta = {
    title: "Form/Button",
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variants: "primary",
        width: "200px",
        height: "50px",
        children: "Button",
    },
};

export const Secondary: Story = {
    args: {
        variants: "secondary",
        width: "200px",
        height: "50px",
        children: "Button",
    },
};
