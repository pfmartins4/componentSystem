import styled from "styled-components";
import { font, borders, colors, paddings, sizeMultiplier } from "styles/theme";
import TextInput, { Label, Input, Wrapper, ErrorMessage } from "./TextInput";

const StyledTextInput = styled(TextInput)``;

const StyledInput = styled(Input)`
  background: ${colors.white.light};
  width: 100%;
  display: block;
  box-sizing: border-box;
  border: ${borders.sm} transparent;
  padding: ${paddings.md};
  bottom: ${({ labelAsPlaceholder }) => (labelAsPlaceholder ? 0 : "unset")};
  position: ${({ labelAsPlaceholder }) =>
    labelAsPlaceholder ? "absolute" : "unset"};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ labelAsPlaceholder }) =>
      labelAsPlaceholder ? "transparent" : colors.grey.light};
  }
`;
const StyledLabel = styled(Label)`
  color: ${colors.grey.default};
  bottom: ${({ labelAsPlaceholder, suspended }) => {
    console.log(suspended);
    if (labelAsPlaceholder) {
      if (suspended) {
        return sizeMultiplier(3.5, paddings.md);
      }
      return paddings.md;
    }
    return "unset";
  }};
  font-family: ${font.family};
  left: ${({ labelAsPlaceholder }) =>
    labelAsPlaceholder ? paddings.md : "unset"};
  position: ${({ labelAsPlaceholder }) =>
    labelAsPlaceholder ? "absolute" : "unset"};
  transition: all 0.3s ease-in-out;
  z-index: 1;
  .suspended {
    bottom: ${props =>
      props.labelAsPlaceholder ? sizeMultiplier(3.5, paddings.md) : "unset"};
  }
`;

const StyledWrapper = styled(Wrapper)`
  width: 100%;
  background-position: center;
  box-sizing: border-box;
  height: 50px;

  position: relative;
  &:after {
    content: " ";
    position: absolute;
    width: 100%;
    background-color: ${colors.grey.default};
    height: 2px;
    bottom: 0;
    left: 0;
    transition: all 0s;
  }
  &:before {
    content: " ";
    position: absolute;
    width: 0%;
    z-index: 1;
    background-color: ${({ color }) => colors[color].default};
    height: 2px;
    bottom: 0;
    left: 50%;
    transition: all 0s;
  }
  &:focus-within {
    &:before {
      transition: all 0.3s ease;
      width: 100%;
      left: 0%;
    }
    ${StyledLabel} {
      bottom: ${props =>
        props.labelAsPlaceholder ? sizeMultiplier(3.5, paddings.md) : "unset"};
    }
  }
`;
/*  */
const StyledErrorMessage = styled(ErrorMessage)`
  color: ${colors.danger.default};
`;

Input.defaultProps = {
  className: "",
  color: "primary",
  id: "input",
  label: "",
  labelAsPlaceholder: false,
  placeholder: "",
  showLabel: true,
};
export default StyledTextInput;
export { StyledInput, StyledLabel, StyledWrapper, StyledErrorMessage };
