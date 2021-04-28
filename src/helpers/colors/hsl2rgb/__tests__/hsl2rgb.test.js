import hsl2rgb from "../hsl2rgb";
import colors from "helpers/colors/__tests__/__data__/colors";

describe("convert hsl to rgb", () => {
  test.each(colors)("converting %p", ({ RGBA, HSLA }) => {
    expect(hsl2rgb(...HSLA.array)).toEqual(RGBA.array);
  });
});
