import {
  StyledChecker as Checker,
  StyledInput as Input,
  StyledLabel as Label,
  StyledWrapper as Wrapper,
  StyledErrorMessage as ErrorMessage,
} from "./styles";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import idGen from "helpers/idGen/idGen";

import PropTypes from "prop-types";
import useMergeRefs from "helpers/useMergeRefs/index";
import useFocusVisible from "helpers/useFocusVisible";

const Radio = forwardRef(function Radio(
  {
    borderRadius,
    className,
    color,
    errorMessage,
    id,
    isButton,
    children,
    name,
    onChange,
    outlined,
    value,
    type,
  },
  ref
) {
  const innerRef = useRef();
  const mergedRefs = useMergeRefs(innerRef, ref);
  const hasFocusVisible = useFocusVisible(mergedRefs);

  const [checked, setChecked] = useState(false);
  const [innerId, setInnerId] = useState(null);

  const handleChange = evt => {
    evt.preventDefault();
    setChecked(evt.target.checked);
    onChange(evt);
  };

  useEffect(() => {
    if (id) {
      setInnerId(id);
      return;
    }
    setInnerId(idGen());
  }, []);
  return (
    <Wrapper className={className}>
      <Label
        borderRadius={borderRadius}
        checked={checked}
        className={hasFocusVisible ? "focusVisible" : ""}
        color={color}
        htmlFor={innerId}
        isButton={isButton}
        outlined={outlined}
        type={type}
      >
        <Checker
          color={color}
          aria-hidden={true}
          checked={checked}
          type={type}
          isButton={isButton}
          className={hasFocusVisible ? "focusVisible" : ""}
        />
        <Input
          type="radio"
          id={innerId}
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

export default Radio;

Radio.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
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
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  isButton: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  outlined: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["outlined", "button", "default"]).isRequired,
  borderRadius: PropTypes.oneOf(["sm", "md", "lg", "rounded"]).isRequired,
  value: PropTypes.string.isRequired,
};

Radio.defaultProps = {
  color: "primary",
  isButton: true,
  outlined: false,
  borderRadius: "sm",
  type: "default",
};
