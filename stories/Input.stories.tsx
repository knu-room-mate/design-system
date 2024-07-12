import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../package/components/form/Input";

const meta = {
    title: "Form/Input",
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "250px",
        height: "50px",
        placeholder: "Placeholder",
    },
};
