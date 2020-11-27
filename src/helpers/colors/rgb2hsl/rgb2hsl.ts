/// <reference path="../ColorsSpaces.d.ts" />
const rgb2Hsl = (
  _r: number,
  _g: number,
  _b: number,
  _a: number = 1
): ColorsSpaces.HSLAArray | ColorsSpaces.HSLArray => {
  const red: number = Math.min(_r / 255, 1);
  const green: number = Math.min(_g / 255, 1);
  const blue: number = Math.min(_b / 255, 1);
  const alpha: number = _a ? _a : 1;
  const value: number = Math.max(red, green, blue);
  const minimum: number = Math.min(red, green, blue);
  const chroma: number = value - minimum;
  let lightness: number = (value + minimum) / 2;
  let hue: number = 0;
  let saturation: number = 0;

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

export default rgb2Hsl;
