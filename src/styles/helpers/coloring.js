const rgb2Hsl = (_r, _g, _b, _a) => {
  const red = Math.min(_r / 255, 1);
  const green = Math.min(_g / 255, 1);
  const blue = Math.min(_b / 255, 1);
  const alpha = _a ? _a : 1;
  const value = Math.max(red, green, blue);
  const minimum = Math.min(red, green, blue);
  const chroma = value - minimum;
  let lightness = (value + minimum) / 2;
  let hue;
  let saturation;
  if (chroma === 0) {
    hue = 0;
  } else {
    switch (value) {
      case red: {
        hue = 60 * ((green - blue) / chroma);
        break;
      }
      case green: {
        hue = 60 * (2 + (blue - red) / chroma);
        break;
      }
      case blue: {
        hue = 60 * (4 + (red - green) / chroma);
        break;
      }
    }
  }
  if (chroma === 0) {
    saturation = 0;
  } else {
    saturation = chroma / (1 - Math.abs(2 * lightness - 1));
  }
  hue = parseFloat(hue.toFixed(1));
  hue = hue < 0 ? hue + 360 : hue;
  lightness = parseFloat((lightness * 100).toFixed(3));
  saturation = parseFloat((saturation * 100).toFixed(3));

  return [hue, saturation, lightness, alpha];
};

const hsl2Rgb = (_hue, _saturation, _lightness, _alpha) => {
  const saturation = _saturation / 100;
  const lightness = _lightness / 100;
  const hue = _hue / 60;
  const chroma = saturation * (1 - Math.abs(2 * lightness - 1));
  const median = chroma * (1 - Math.abs((hue % 2) - 1));
  const matchLight = lightness - chroma / 2;
  const alpha = _alpha ? _alpha : 1;
  let red, green, blue;
  red = green = blue = 0;
  if (lightness !== 0) {
    if (hue >= 0 && hue <= 1) {
      red = chroma;
      green = median;
    }
    if (hue > 1 && hue <= 2) {
      red = median;
      green = chroma;
    }
    if (hue > 2 && hue <= 3) {
      green = chroma;
      blue = median;
    }
    if (hue > 3 && hue <= 4) {
      green = median;
      blue = chroma;
    }
    if (hue > 4 && hue <= 5) {
      red = median;
      blue = chroma;
    }
    if (hue > 5 && hue <= 6) {
      red = chroma;
      blue = median;
    }
  }
  const rgbArr = [red, green, blue].map(channel =>
    Math.round((channel + matchLight) * 255)
  );
  return [...rgbArr, alpha];
};

const checkColorType = color => {
  const isHex = color.match(/\#/);
  const isHsl = color.match(/hsl/);
  const isRgb = color.match(/(rgb)/);
  return isHex ? "hex" : isHsl ? "hsl" : isRgb ? "rgb" : undefined;
};

const parseRGBArray = color => {
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

const parseHSLArray = color => {
  let hslValues = color
    .replace(/(hsla|hsl)|\(|\)|%/gm, "")
    .split(",")
    .map(val => parseInt(val.trim()));
  return hslValues;
};

const lighten = (amount, color) => {
  const colorType = checkColorType(color);
  let hue, saturation, lightness;
  let red, green, blue;
  let returnable;
  if (colorType === "rgb" || colorType === "hex") {
    [red, green, blue] = parseRGBArray(color);
    [hue, saturation, lightness] = rgb2Hsl(red, green, blue);
    lightness = Math.min(lightness + amount, 100);
    [red, green, blue] = hsl2Rgb(hue, saturation, lightness);
    returnable =
      colorType === "rgb"
        ? parseRgb([red, green, blue])
        : parseHex([red, green, blue]);
  } else {
    [hue, saturation, lightness] = parseHSLArray(color);
    lightness = Math.min(lightness + amount, 100);
    returnable = parseHsl([hue, saturation, lightness]);
  }
  return returnable;
};

const darken = (amount, color) => {
  const colorType = checkColorType(color);
  let hue, saturation, lightness;
  let red, green, blue;
  let returnable;
  if (colorType === "rgb" || colorType === "hex") {
    [red, green, blue] = parseRGBArray(color);
    [hue, saturation, lightness] = rgb2Hsl(red, green, blue);
    lightness = Math.max(lightness - amount, 0);
    [red, green, blue] = hsl2Rgb(hue, saturation, lightness);
    returnable =
      colorType === "rgb"
        ? parseRgb([red, green, blue])
        : parseHex([red, green, blue]);
  } else {
    [hue, saturation, lightness] = parseHSLArray(color);
    lightness = Math.max(lightness - amount, 0);
    returnable = parseHsl([hue, saturation, lightness]);
  }
  return returnable;
};

const parseHsl = ([hue, saturation, lightness, alpha]) =>
  alpha
    ? `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
    : `hsl(${hue}, ${saturation}%, ${lightness}%)`;

const parseRgb = ([red, blue, green, alpha]) =>
  alpha
    ? `rgba(${red}, ${blue}, ${green}, ${alpha})`
    : `rgb(${red}, ${blue}, ${green})`;

const parseHex = ([red, blue, green, alpha]) =>
  `#${red.toString(16).padEnd(2, "0")}${blue
    .toString(16)
    .padEnd(2, "0")}${green.toString(16).padEnd(2, "0")}${
    alpha ? (alpha * 255).toString(16).padEnd(2, "0") : ""
  }`;

export default rgb2Hsl;
export {
  parseRGBArray,
  parseHSLArray,
  lighten,
  darken,
  hsl2Rgb,
  parseHex,
  parseHsl,
  parseRgb,
};
