import TextInput from "./";
export default {
  component: TextInput,
  title: "Desing System/Text Input",
  argTypes: {
    label: {
      defaultValue: "Label",
      control: {
        type: "text",
      },
    },
    onChange: {
      actions: "change",
    },
    placeholder: {
      defaultValue: "placeholder",
      control: {
        type: "text",
      },
    },
  },
};

export const textInput = ({
  className,
  color,
  errorMessage,
  id,
  label,
  labelAsPlaceholder,
  onChange,
  placeholder,
  showLabel,
}) => (
  <TextInput
    className={className}
    color={color}
    errorMessage={errorMessage}
    id={id}
    label={label}
    labelAsPlaceholder={labelAsPlaceholder}
    onChange={onChange}
    placeholder={placeholder}
    showLabel={showLabel}
  />
);
