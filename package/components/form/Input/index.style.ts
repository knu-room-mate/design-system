import styled from "@emotion/styled";
import { InputProps } from ".";

export const InputElement = styled.input<InputProps>`
    display: block;

    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border-radius: 15px;
    border: 1px solid #bebebe;

    padding: 0px 15px;
`;
