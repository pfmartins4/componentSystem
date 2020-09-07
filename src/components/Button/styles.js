import styled from "styled-components";
import { colors, borders, font, paddings, sizeMultiplier } from "/styles/theme";
import Button from "./Button";
import Icon from "/components/Icon";

const { size: fontSize, family } = font;

const Styles = styled(Button)`
  background: ${({ color, type }) =>
    type === "default" ? colors[color]["default"] : "none"};

  background-position: center;

  border: ${borders.sm}
    ${({ color, type }) =>
      type === "outlined" ? colors[color]["default"] : "transparent"};

  border-radius: ${({ borderRadius }) =>
    borderRadius === "rounded"
      ? sizeMultiplier(4, borders.radius.lg)
      : borders.radius[borderRadius]};

  color: ${({ type, color }) =>
    type !== "default" ? colors[color]["default"] : "inherit"};

  display: flex;

  font-size: ${({ size }) => fontSize[size]};

  font-weight: 600;

  line-height: ${({ size }) => fontSize[size]};

  margin: 0;

  padding: ${({ size, type, icon }) =>
    type === "default" || type === "outlined"
      ? `${paddings[size]} ${sizeMultiplier(icon ? 2 : 4, paddings[size])}`
      : "none"};

  transition: background 0.8s;

  text-decoration: ${({ type }) => (type === "link" ? "underline" : "none")};

  cursor: pointer;

  ${Icon} {
    color: ${({ type, color }) =>
      type !== "default" ? colors[color]["default"] : "inherit"};
    margin-right: ${({ size, children }) =>
      children ? sizeMultiplier(2, paddings[size]) : 0};
  }

  &:focus {
    outline: none;
  }
  &.focusWithin,
  &:hover {
    background: ${({ color, type }) =>
      type === "default"
        ? `${colors[color]["dark"]} radial-gradient(circle, transparent 1%, ${colors[color]["dark"]} 1%) center/15000%`
        : "transparent"};
    border-color: ${({ color, type }) =>
      type === "outlined" ? colors[color]["dark"] : "transparent"};
    color: ${({ color, type }) =>
      type !== "default" ? colors[color]["dark"] : "inherit"};
  }
  &:active {
    background-color: ${({ color, type }) =>
      type === "default" ? colors[color]["light"] : "transparent"};
    background-size: 100%;
    transition: background 0s;
  }
`;

Styles.defaultProps = {
  borderRadius: "md",
  className: "",
  children: "Button",
  color: "primary",
  isDark: false,
  href: "",
  type: "default",
  size: "md",
};

export default Styles;
