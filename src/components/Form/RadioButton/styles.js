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
  border: ${({ outlined }) => {
    if (outlined) {
      return `${borders.sm} ${colors.white.dark}`;
    }
    return "";
  }};
  border-radius: ${({ outlined }) => (outlined ? borders.radius.md : "")};
  box-sizing: border-box;
  font-family: ${font.family};
  padding: ${({ outlined }) => (outlined ? paddings.md : "")};

  &:hover,
  &.focusVisible {
    box-shadow: ${({ outlined }) =>
      outlined ? `0px 0px 1px ${colors.black.default}` : ""};
  }
`;

const Checker = ({ checked, color, className }) => (
  <span className={className} />
);
const StyledChecker = styled(Checker)`
  border: ${({ color }) => `${borders.md} ${colors[color].default}`};
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
    transition: background 0.3s, bottom 0.3s 0.4s ease-out,
      left 0.3s 0.4s ease-out, right 0.3s 0.4s ease-out, top 0.3s 0.4s ease-out;
  }
  ${StyledLabel}:hover & {
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
