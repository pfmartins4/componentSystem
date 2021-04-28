import Radio from ".";
const ComponentA = () => <div>Batata</div>;
const ComponentB = () => <div>Arroz</div>;
const ComponentC = () => <div>Feijão</div>;
const ComponentD = () => <div>Batata</div>;
const components = { ComponentA, ComponentB, ComponentC, ComponentD };
const componentMap = Object.keys(components);
export default {
  component: Radio,
  title: "Desing System/Form/Radio",
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

export const radio = ({
  borderRadius,
  className,
  color,
  errorMessage,
  id,
  children,
  name,
  onChange,
  outlined,
  type,
  value,
}) => (
  <Radio
    borderRadius={borderRadius}
    className={className}
    color={color}
    errorMessage={errorMessage}
    id={id}
    name={name}
    onChange={onChange}
    outlined={outlined}
    type={type}
    value={value}
  >
    {children}
  </Radio>
);
