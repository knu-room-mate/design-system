import styled from "@emotion/styled";
import { InputProps } from ".";

export const InputWrapper = styled.div`
    position: relative;
    width: fit-content;
`;

export const InputContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    align-items: center;

    margin-right: 5px;

    height: 100%;
`;

export const InputElement = styled.input<InputProps>`
    display: block;

    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border-radius: 15px;
    border: 1px solid #bebebe;

    padding: 0px 15px;

    background-color: #fff;

    &:focus {
        outline: 2px solid #d73a32;
    }
`;
