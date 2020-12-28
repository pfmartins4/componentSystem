import colorSpace from "../colorSpace";
import hsl2rgb from "../hsl2rgb/index";
import hsl2String from "../hsl2String/index";
import parseHsl from "../parseHsl/index";
import parseRgb from "../parseRgb/index";
import rgb2HexString from "../rgb2HexString/index";
import rgb2hsl from "../rgb2hsl/index";
import rgb2String from "../rgb2String/index";

const lighten = (amount, color) => {
  const colorType = colorSpace(color);
  let hue;
  let saturation;
  let lightness;
  let red;
  let green;
  let blue;
  let lightened;
  if (colorType === "rgb" || colorType === "hex") {
    [red, green, blue] = parseRgb(color);
    [hue, saturation, lightness] = rgb2hsl(red, green, blue);
    lightness = Math.min(lightness + amount, 100);
    [red, green, blue] = hsl2rgb(hue, saturation, lightness);
    lightened =
      colorType === "rgb"
        ? rgb2String([red, green, blue])
        : rgb2HexString([red, green, blue]);
  } else {
    [hue, saturation, lightness] = parseHsl(color);
    lightness = Math.min(lightness + amount, 100);
    lightened = hsl2String([hue, saturation, lightness]);
  }
  return lightened;
};

export default lighten;
