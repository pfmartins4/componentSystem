const rgb2String = ([red, blue, green, alpha]) =>
  alpha
    ? `rgba(${red}, ${blue}, ${green}, ${alpha})`
    : `rgb(${red}, ${blue}, ${green})`;

export default rgb2String;
