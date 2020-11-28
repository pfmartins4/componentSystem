import isObject from "./isObject";

describe("Type guards: Object", () => {
  test("array", () => {
    expect(isObject([12, "batata", { a: "rroz" }])).toBeFalsy();
  });
  test("boolean", () => {
    expect(isObject(false)).toBeFalsy();
  });
  test("Constructors", () => {
    expect(isObject(Array)).toBeFalsy();
    expect(isObject(BigInt)).toBeFalsy();
    expect(isObject(Boolean)).toBeFalsy();
    expect(isObject(Date)).toBeFalsy();
    expect(isObject(Number)).toBeFalsy();
    expect(isObject(Function)).toBeFalsy();
    expect(isObject(String)).toBeFalsy();
  });
  test("Date", () => {
    expect(isObject(new Date())).toBeFalsy();
  });
  test("NaN", () => {
    expect(isObject(NaN)).toBeFalsy();
  });
  test("Null", () => {
    expect(isObject(null)).toBeFalsy();
  });
  test("number", () => {
    expect(isObject(12)).toBeFalsy();
  });
  test("object", () => {
    expect(isObject({ a: "rroz", ba: "tata" })).toBeTruthy();
  });
  test("string", () => {
    expect(isObject("12")).toBeFalsy();
  });
  test("undefined", () => {
    expect(isObject(undefined)).toBeFalsy();
  });
});
