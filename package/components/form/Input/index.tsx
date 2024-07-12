import React, { ComponentProps } from "react";
import { InputElement } from "./index.style";
import { Size } from "@/types/utils";

export interface InputProps extends ComponentProps<"input"> {
    width: Size;
    height: Size;
}

export const Input = ({ ...props }: InputProps) => {
    return <InputElement {...props}></InputElement>;
};
