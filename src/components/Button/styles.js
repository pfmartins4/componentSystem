import styled from "styled-components";
import { colors, borders, font, paddings } from "/styles/theme";
import Button from "./Button";
const { size: fontSize, family } = font;

const Styles = styled(Button)`
    background: ${({ type, fill }) => fill === "default" ? colors[type] : "none"};;
    border: ${borders.sm} ${({ type, fill }) => fill === "ghost" ? colors[type] : "transparent"};
    border-radius: ${borders.smRadius};
    font-size: ${({ size }) => fontSize[size]};
    padding: ${({ size }) => paddings[size]};
    margin: 0;
`

export default Styles;