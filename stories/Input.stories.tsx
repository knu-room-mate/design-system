import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../package/components/form/Input";
import { Button } from "../package/components/form/Button";

const meta = {
    title: "Form/Input",
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "300px",
        height: "50px",
        placeholder: "Placeholder",
    },
};

export const Children: Story = {
    args: {
        width: "300px",
        height: "50px",
        placeholder: "Placeholder",
    },
    render: (args) => {
        return (
            <Input {...args}>
                <Button variants="primary" width="100px" height="45px">
                    Button
                </Button>
            </Input>
        );
    },
};
