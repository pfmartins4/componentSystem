import { forwardRef } from "react";

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
    value,
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
      value={value}
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

export { Input, Label, Wrapper, ErrorMessage };
