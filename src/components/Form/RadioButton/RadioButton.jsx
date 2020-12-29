import {
  StyledChecker as Checker,
  StyledInput as Input,
  StyledLabel as Label,
  StyledWrapper as Wrapper,
  StyledErrorMessage as ErrorMessage,
} from "./styles";
import { forwardRef, useEffect, useRef, useState } from "react";
import idGen from "helpers/idGen/idGen";

import PropTypes from "prop-types";
import useMergeRefs from "helpers/useMergeRefs/index";
import useFocusVisible from "helpers/useFocusVisible";

const RadioButton = forwardRef(function RadioButton(
  {
    className,
    color,
    errorMessage,
    id,
    children,
    name,
    onChange,
    value,
    outlined,
  },
  ref
) {
  const innerRef = useRef();
  const mergedRefs = useMergeRefs(innerRef, ref);
  const hasFocusVisible = useFocusVisible(mergedRefs);
  const [checked, setChecked] = useState(false);
  const handleChange = evt => {
    evt.preventDefault();
    console.log(evt.target.checked);
    setChecked(evt.target.checked);
    onChange(evt);
  };
  const randomId = idGen();
  return (
    <Wrapper className={className}>
      <Label
        htmlFor={id || randomId}
        outlined={outlined}
        className={hasFocusVisible ? "focusVisible" : ""}
        color={color}
      >
        <Checker
          color={color}
          aria-hidden={true}
          checked={checked}
          className={hasFocusVisible ? "focusVisible" : ""}
        />
        <Input
          type="radio"
          id={id || randomId}
          ref={mergedRefs}
          name={name}
          value={value}
          onChange={handleChange}
        />
        {children}
      </Label>
      {errorMessage && <ErrorMessage />}
    </Wrapper>
  );
});

export default RadioButton;

RadioButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "terciary",
    "white",
    "grey",
    "black",
    "success",
    "warn",
    "danger",
  ]),
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  outlined: PropTypes.bool.isRequired,
};

RadioButton.defaultProps = {
  color: "primary",
  outlined: true,
};
