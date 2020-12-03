const hsl2rgb = (_hue, _saturation, _lightness, _alpha = 1) => {
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
    if ((hue >= 0 || hue === 6) && hue < 1) {
      red = chroma;
      green = median;
    }
    if (hue >= 1 && hue < 2) {
      red = median;
      green = chroma;
    }
    if (hue >= 2 && hue < 3) {
      green = chroma;
      blue = median;
    }
    if (hue >= 3 && hue < 4) {
      green = median;
      blue = chroma;
    }
    if (hue >= 4 && hue < 5) {
      red = median;
      blue = chroma;
    }
    if (hue >= 5 && hue < 6) {
      red = chroma;
      blue = median;
    }
  }
  const rgbArr = [red, green, blue].map(channel => {
    let normalized = (channel + matchLight) * 255;
    return Math.round(normalized);
  });
  return [...rgbArr, alpha];
};
export default hsl2rgb;
