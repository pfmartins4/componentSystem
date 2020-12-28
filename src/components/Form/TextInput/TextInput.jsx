import PropTypes from "prop-types";
import idGen from "helpers/idGen/idGen";
import { forwardRef, useState } from "react";
import {
  StyledErrorMessage,
  StyledInput,
  StyledLabel,
  StyledWrapper,
} from "./styles";

const Input = forwardRef(function Input(
  {
    className,
    color,
    id,
    label,
    labelAsPlaceholder,
    name,
    onChange,
    placeholder,
    type,
  },
  ref
) {
  return (
    <input
      className={className}
      id={id}
      aria-label={label}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      name={name}
      ref={ref}
    />
  );
});

const Label = ({ children, className, htmlFor, labelAsPlaceholder }) => (
  <label className={className} htmlFor={htmlFor}>
    {children}
  </label>
);

const Wrapper = ({ children, className, color, labelAsPlaceholder }) => (
  <div className={className}>{children}</div>
);

const ErrorMessage = ({ className, message }) => (
  <div className={className}>{message}</div>
);

const TextInput = forwardRef(function TextInput(
  {
    className,
    color,
    errorMessage,
    id,
    label,
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
    <StyledWrapper
      color={color}
      className={className}
      labelAsPlaceholder={labelAsPlaceholder}
    >
      {showLabel && (
        <StyledLabel
          htmlFor={id || randomId}
          labelAsPlaceholder={labelAsPlaceholder}
          suspended={suspendedLabel}
          data-testid="textIpuntLabel"
        >
          {label}
        </StyledLabel>
      )}
      <StyledInput
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
      {errorMessage && <StyledErrorMessage message={errorMessage} />}
    </StyledWrapper>
  );
});

export default TextInput;
export { Input, Label, Wrapper, ErrorMessage };
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
