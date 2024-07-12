import styled from "@emotion/styled";
import { ButtonProps } from ".";

export const ButtonElement = styled.button<ButtonProps>`
    display: block;

    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border-radius: 15px;
    border: 1px solid;

    border-color: ${(props) => {
        switch (props.variants) {
            case "primary":
                return "#d73a32";
            case "secondary":
                return "#d73a32";
            case "disabled":
                return "#BEBEBE";
        }
    }};

    background-color: ${(props) => {
        switch (props.variants) {
            case "primary":
                return "#d73a32";
            case "secondary":
                return "#fff";
            case "disabled":
                return "#BEBEBE";
        }
    }};

    color: ${(props) => {
        switch (props.variants) {
            case "primary":
                return "#fff";
            case "secondary":
                return "#d73a32";
            case "disabled":
                return "#eee";
        }
    }};

    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`;
