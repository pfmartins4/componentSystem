import parseRGB from "../parseRgb";
import colors from "helpers/colors/__tests__/__data__/colors";

describe("descrptions", () => {
  test.each(colors)(`fake %p`, ({ RGBA, HEX }) => {
    expect(parseRGB(RGBA.string)).toEqual(RGBA.array);
    expect(parseRGB(HEX)).toEqual(RGBA.array);
  });
});
