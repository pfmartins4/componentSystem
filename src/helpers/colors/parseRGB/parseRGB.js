const parseRGB = color => {
  const isRgb = color.match(/(rgb)/);
  const isHex = color.match(/\#/);
  let rgbValues;
  if (isRgb) {
    rgbValues = color
      .replace(/(rgba|rgb)|\(|\)/gm, "")
      .split(",")
      .map(val => parseInt(val.trim()));
    return rgbValues;
  }
  if (isHex) {
    const hashless = color.replace("#", "");
    const length = color.length;

    if (length / 3 === 1 || length / 4 === 1) {
      rgbValues = hashless.match(/.{1}/g).map(val => parseInt(val, 16));
    } else {
      rgbValues = hashless.match(/.{2}/g).map(val => parseInt(val, 16));
    }
    return rgbValues;
  }
};
