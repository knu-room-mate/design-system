import React, { ComponentProps } from "react";
import { ButtonElement } from "./index.style";
import { Size } from "@/types/utils";

export interface ButtonProps extends ComponentProps<"button"> {
  variants: "primary" | "secondary";
  width: Size;
  height: Size;
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonElement {...props}>{children}</ButtonElement>;
};
