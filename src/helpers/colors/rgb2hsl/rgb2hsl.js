const rgb2hsl = (_r, _g, _b, _a = 1) => {
  const red = Math.min(_r / 255, 1);
  const green = Math.min(_g / 255, 1);
  const blue = Math.min(_b / 255, 1);
  const alpha = _a;
  const value = Math.max(red, green, blue);
  const minimum = Math.min(red, green, blue);
  const chroma = value - minimum;
  let lightness = (value + minimum) / 2;

  let hue = 0;
  let saturation = 0;

  if (chroma !== 0) {
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

  if (chroma !== 0) {
    saturation = chroma / (1 - Math.abs(2 * lightness - 1));
  }

  hue = Math.round(hue);
  hue = hue < 0 ? hue + 360 : hue;
  lightness = Math.round(lightness * 100);
  saturation = Math.round(saturation * 100);

  return [hue, saturation, lightness, alpha];
};

export default rgb2hsl;
