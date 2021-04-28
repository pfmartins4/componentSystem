const parseHsl = color => {
  let hslValues = color
    .replace(/(hsla|hsl)|\(|\)|%/gm, "")
    .split(",")
    .map(val => parseInt(val.trim()));
  if (hslValues.length === 3) {
    hslValues.push(1);
  }
  return hslValues;
};

export default parseHsl;
