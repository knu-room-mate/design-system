import React, { ComponentProps } from "react";
import { LabelElement } from "./index.style";

export interface LabelProps extends ComponentProps<"label"> {
    children?: React.ReactNode;
}

export const Label = ({ children, ...props }: LabelProps) => {
    return <LabelElement {...props}>{children}</LabelElement>;
};
