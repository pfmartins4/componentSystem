import PropTypes from "prop-types";
import idGen from "helpers/idGen/idGen";
import { forwardRef, useState } from "react";
import {
  StyledErrorMessage as ErrorMessage,
  StyledInput as Input,
  StyledLabel as Label,
  StyledWrapper as Wrapper,
} from "./styles";

const TextInput = forwardRef(function TextInput(
  {
    className,
    color,
    label,
    errorMessage,
    id,
    labelAsPlaceholder,
    name,
    onChange,
    placeholder,
    showLabel,
  },
  ref
) {
  const randomId = idGen();
  const [suspendedLabel, setSuspendedLabel] = useState(false);
  const handleChange = evt => {
    evt.preventDefault();
    if (evt.target.value) {
      setSuspendedLabel(true);
    } else {
      setSuspendedLabel(false);
    }
    onChange(evt);
  };
  return (
    <>
      <Wrapper
        color={color}
        className={className}
        labelAsPlaceholder={labelAsPlaceholder}
      >
        {showLabel && (
          <Label
            htmlFor={id || randomId}
            labelAsPlaceholder={labelAsPlaceholder}
            suspended={suspendedLabel}
            data-testid="textIpuntLabel"
          >
            {label}
          </Label>
        )}
        <Input
          aria-label={labelAsPlaceholder && label}
          color={color}
          id={id || randomId}
          labelAsPlaceholder={labelAsPlaceholder}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          ref={ref}
          data-testid="textIpunt"
        />
      </Wrapper>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </>
  );
});

export default TextInput;

TextInput.propTypes = {
  className: PropTypes.string,
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
  label: PropTypes.string.isRequired,
  labelAsPlaceholder: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string,
  showLabel: PropTypes.bool,
  errorMessage: PropTypes.string,
};

TextInput.defaultProps = {
  color: "primary",
  labelAsPlaceholder: false,
  showLabel: true,
};
