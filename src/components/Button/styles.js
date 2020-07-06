import styled from "styled-components";
import { colors, borders, font, paddings, sizeMultiplier } from "/styles/theme";
import Button from "./Button";
const { size: fontSize, family } = font;

const Styles = styled(Button)`
    background: ${({ type, fill }) => fill === "default" ? colors[type]["default"] : "none"};
    border: ${borders.sm} ${({ type, fill }) => fill === "outlined" ? colors[type]["default"] : "transparent"};
    border-radius: ${({borderRadius, rounded}) => rounded ? sizeMultiplier(4, borders.radius.lg): borders.radius[borderRadius]};
    font-size: ${({ size }) => fontSize[size]};
    padding: ${({ size }) => `${paddings[size]} ${sizeMultiplier(4, paddings[size])}`};
    line-height: ${({ size }) => fontSize[size]};
    margin: 0;
    font-weight: 600;
    color: ${({fill, type}) => fill === "outlined" ? colors[type]["default"] : "inherit"};
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &:hover {

    }
`

Styles.defaultProps = {
    type: "primary",
    fill: "default",
    size: "md",
    rounded: false,
    borderRadius: "md",
    isDark: false,
    icon: undefined
}


export default Styles;