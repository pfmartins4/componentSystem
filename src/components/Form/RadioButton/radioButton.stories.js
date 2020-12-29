import RadioButton from "./";
const ComponentA = () => <div>Batata</div>;
const ComponentB = () => <div>Arroz</div>;
const ComponentC = () => <div>Feijão</div>;
const ComponentD = () => <div>Batata</div>;
const components = { ComponentA, ComponentB, ComponentC, ComponentD };
const componentMap = Object.keys(components);
export default {
  component: RadioButton,
  title: "Desing System/Radio Button",
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
    children: {
      defaultValue: componentMap[0],
      control: {
        type: "select",
        options: componentMap,
      },
    },
  },
};

export const radioButton = ({
  className,
  color,
  errorMessage,
  id,
  children,
  name,
  onChange,
  outlined,
  value,
}) => (
  <RadioButton
    className={className}
    color={color}
    errorMessage={errorMessage}
    id={id}
    name={name}
    onChange={onChange}
    value={value}
    outlined={outlined}
  >
    {children}
  </RadioButton>
);
