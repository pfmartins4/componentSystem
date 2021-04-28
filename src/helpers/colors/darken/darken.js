import colorSpace from "helpers/colors/colorSpace";
import hsl2rgb from "helpers/colors/hsl2rgb";
import hsl2String from "helpers/colors/hsl2String";
import parseHsl from "helpers/colors/parseHsl";
import parseRgb from "helpers/colors/parseRgb";
import rgb2HexString from "helpers/colors/rgb2HexString";
import rgb2Hsl from "helpers/colors/rgb2hsl";
import rgb2String from "helpers/colors/rgb2String";

const darken = (amount, color) => {
  const colorType = colorSpace(color);
  let hue;
  let saturation;
  let lightness;
  let red;
  let green;
  let blue;
  let darkened;
  if (colorType === "rgb" || colorType === "hex") {
    [red, green, blue] = parseRgb(color);
    [hue, saturation, lightness] = rgb2Hsl(red, green, blue);
    lightness = Math.max(lightness - amount, 0);
    [red, green, blue] = hsl2rgb(hue, saturation, lightness);
    darkened =
      colorType === "rgb"
        ? rgb2String([red, green, blue])
        : rgb2HexString([red, green, blue]);
  } else {
    [hue, saturation, lightness] = parseHsl(color);
    lightness = Math.max(lightness - amount, 0);
    darkened = hsl2String([hue, saturation, lightness]);
  }
  return darkened;
};
export default darken;
