const colorSpace = colorString => {
  const isHex = colorString.match(/\#/);
  const isHsl = colorString.match(/hsl/);
  const isRgb = colorString.match(/(rgb)/);
  return isHex ? "hex" : isHsl ? "hsl" : isRgb ? "rgb" : undefined;
};

export default colorSpace;
