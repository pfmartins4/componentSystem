import colors from "helpers/colors/__tests__/__data__/colors";
import rgb2HexString from "../rgb2HexString";

describe("rgb 2 hex string", () => {
  test("fake", () => {
    console.log(colors, rgb2HexString);
    expect(true).toBeTruthy();
  });
});
