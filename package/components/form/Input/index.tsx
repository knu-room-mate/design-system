import React, { ComponentProps, ReactNode } from "react";
import { InputContainer, InputElement, InputWrapper } from "./index.style";
import { Size } from "@/types/utils";

export interface InputProps extends ComponentProps<"input"> {
    width: Size;
    height: Size;
    children?: ReactNode;
}

export const Input = ({ children, ...props }: InputProps) => {
    return (
        <InputWrapper>
            <InputElement {...props} />
            <InputContainer>{children}</InputContainer>
        </InputWrapper>
    );
};
