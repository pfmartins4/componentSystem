import rgb2hsl from "../rgb2hsl";
import colors from "helpers/colors/__tests__/__data__/colors";
console.log(colors);
describe("RGB to HSL conversion", () => {
  test.each(colors)(`%p RGB recieved HSL expetd`, ({ RGBA, HSLA }) => {
    const [r, g, b] = RGBA.array;
    expect(rgb2hsl(r, g, b)).toEqual(HSLA.array);
    expect(true).toBeTruthy();
  });
});
