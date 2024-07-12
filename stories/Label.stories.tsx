import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../package/components/form/Label";

const meta = {
    title: "Form/Label",
    component: Label,
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "LABEL",
    },
};
