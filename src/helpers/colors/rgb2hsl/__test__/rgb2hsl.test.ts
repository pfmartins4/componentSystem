import { rgb2Hsl } from "helpers/colors/rgb2hsl/index";
import colors from "helpers/colors/colors";
describe("RGB to HSL conversion", () => {
  test.each(colors)(`%p RGB recieved HSL expetd`, ({ RGBA, HSLA }) => {
    const [r, g, b] = RGBA.array;
    expect(rgb2Hsl(r, g, b)).toEqual(HSLA.array);
    expect(true).toBeTruthy();
  });
});
