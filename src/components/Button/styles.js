import styled from "styled-components";
import { colors, borders, font, paddings, sizeMultiplier } from "/styles/theme";
import Button from "./Button";
const { size: fontSize, family } = font;

const Styles = styled(Button)`
    background: ${({ color, type }) => type === "default" ? colors[color]["default"] : "none"};
    border: ${borders.sm} ${({ color, type }) => type === "outlined" ? colors[color]["default"] : "transparent"};
    border-radius: ${({borderRadius}) => borderRadius === "rounded" ? sizeMultiplier(4, borders.radius.lg): borders.radius[borderRadius]};
    color: ${({type, color}) => type !== "default" ? colors[color]["default"] : "inherit"};
    font-size: ${({ size }) => fontSize[size]};
    font-weight: 600;
    line-height: ${({ size }) => fontSize[size]};
    margin: 0;
    padding: ${({ size, type }) => type === "default" || type === "outlined" ? `${paddings[size]} ${sizeMultiplier(4, paddings[size])}` : "none"};
    transition: background-color 0.3s;
    text-decoration: ${({type}) => type === "link" ? "underline" : "none" };
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &.focusWithin,
    &:hover {
        background: ${({color, type})=> type === "default" ? colors[color]["dark"] : "transparent" };
        border-color: ${({color, type})=> type === "outlined" ? colors[color]["dark"] : "transparent" };
        color: ${({color, type}) => type !== "default" ? colors[color]["dark"] : "inherit" };
    }

`

Styles.defaultProps = {
    borderRadius: "md",
    className: undefined,
    children: undefined,
    color: "primary",
    isDark: false,
    href: undefined,
    onClick: undefined,
    type: "default",
    size: "md"
}


export default Styles;