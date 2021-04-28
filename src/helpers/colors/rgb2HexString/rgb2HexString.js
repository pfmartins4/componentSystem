const rgb2HexString = ([red, blue, green, alpha]) =>
  `#${red.toString(16).padEnd(2, "0")}${blue
    .toString(16)
    .padEnd(2, "0")}${green.toString(16).padEnd(2, "0")}${
    alpha ? (alpha * 255).toString(16).padEnd(2, "0") : ""
  }`;

export default rgb2HexString;
