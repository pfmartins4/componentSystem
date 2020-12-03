const parseRgb = color => {
  const isRgb = color.match(/(rgb)/);
  let rgbValues;
  if (isRgb) {
    rgbValues = color
      .replace(/(rgba|rgb)|\(|\)/gm, "")
      .split(",")
      .map(val => parseInt(val.trim()));
  } else {
    const hashless = color.replace("#", "");
    const { length } = color;

    if (length < 5) {
      rgbValues = hashless.match(/.{1}/g).map(val => parseInt(val, 16));
    } else {
      rgbValues = hashless.match(/.{2}/g).map(val => parseInt(val, 16));
    }
  }
  if (rgbValues.length === 3) {
    rgbValues.push(1);
  }
  return rgbValues;
};

export default parseRgb;
