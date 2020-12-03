import colors from "helpers/colors/__tests__/__data__/colors";
import parseHsl from "../parseHsl";

describe("parse HSL", () => {
  test.each(colors)(`parsing %p`, ({ HSLA: { string, array } }) => {
    expect(parseHsl(string)).toEqual(array);
  });
});
