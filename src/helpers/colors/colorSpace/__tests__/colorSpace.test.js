import colors from "helpers/colors/__tests__/__data__/colors";
import colorSpace from "../colorSpace";

describe("color space detecting", () => {
  test.each(colors)(
    "%p verifing",
    ({ HEX, RGBA: { string: rgbString }, HSLA: { string: hslString } }) => {
      expect(colorSpace(HEX)).toBe("hex");
      expect(colorSpace(rgbString)).toBe("rgb");
      expect(colorSpace(hslString)).toBe("hsl");
    }
  );
});
