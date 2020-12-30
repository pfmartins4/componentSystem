import {
  Wrapper,
  Label,
  Input,
  ErrorMessage,
} from "components/Form/BasicInputElements";
import styled from "styled-components";
import { borders, colors, font, paddings, sizeMultiplier } from "styles/theme";

const StyledInput = styled(Input)`
  position: absolute;
  left: -1000000px;
`;

const StyledLabel = styled(Label)`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${paddings.lg};
  color: ${colors.black.light};
  border: ${({ type, checked, color }) => {
    if (type === "outlined") {
      return `${borders.sm} ${colors.white.dark}`;
    }
    if (type === "button" && !checked) {
      return `${borders.sm} ${colors[color].default}`;
    }
    if (type === "button" && checked) {
      return `${borders.sm} transparent`;
    }
    return "";
  }};
  border-radius: ${({ type, borderRadius }) =>
    type === "outlined" || type === "button"
      ? borders.radius[borderRadius]
      : ""};
  box-sizing: border-box;
  font-family: ${font.family};
  padding: ${({ type }) =>
    type === "outlined" || type === "button" ? paddings.md : ""};
  background-color: ${({ checked, color, type }) => {
    if (type === "button" && checked) {
      return colors[color].default;
    }
    return "";
  }};
  &:hover,
  &.focusVisible {
    box-shadow: ${({ type }) =>
      type === "outlined" || type === "button"
        ? `0px 0px 1px ${colors.black.default}`
        : ""};
  }
`;

const Checker = ({ checked, color, className }) => (
  <span className={className} />
);
const StyledChecker = styled(Checker)`
  border: ${({ color }) => `${borders.md} ${colors[color].default}`};
  display: ${({ type }) => (type === "button" ? "none" : "initial")};
  border-radius: 50%;
  box-sizing: border-box;
  content: " ";
  height: ${sizeMultiplier(1.25, paddings.lg)};
  position: relative;
  top: calc(
    50% - ${sizeMultiplier(0.63, paddings.lg)}
  ); //set the center of circle to the center of label element
  width: ${sizeMultiplier(1.25, paddings.lg)};

  &::before {
    background-color: ${({ color, checked }) =>
      checked ? colors[color].default : "transparent"};
    border-radius: 50%;
    bottom: ${({ checked }) => (checked ? "2px" : 0)};
    content: " ";
    left: ${({ checked }) => (checked ? "2px" : 0)};
    position: absolute;
    right: ${({ checked }) => (checked ? "2px" : 0)};
    top: ${({ checked }) => (checked ? "2px" : 0)};
    transition: background-color 0.3s, bottom 0.3s 0.4s ease-out,
      left 0.3s 0.4s ease-out, right 0.3s 0.4s ease-out, top 0.3s 0.4s ease-out;
  }
  ${StyledLabel}:hover &, 
  .focusVisible {
    border-color: ${({ color }) => colors[color].dark};
    &::before {
      background-color: ${({ color, checked }) =>
        checked ? colors[color].dark : "transparent"};
    }
  }
`;

const StyledWrapper = styled(Wrapper)``;

const StyledErrorMessage = styled(ErrorMessage)``;

export {
  StyledChecker,
  StyledInput,
  StyledLabel,
  StyledWrapper,
  StyledErrorMessage,
};
