import mergeArrays from "./mergeArray";

test("mergeArrays, simple merge", () => {
  let array1 = [1, 2, 3];
  let array2 = [4, 5, 6];
  let mergedArray = mergeArrays(array1, array2);
  expect(String(mergedArray)).toBe(String([1, 2, 3, 4, 5, 6]));
});

test("mergeArrays, merge with repeated elements", () => {
  let array1 = [1, 2, 3];
  let array2 = [1, 4, 5, 6];
  let mergedArray = mergeArrays(array1, array2);
  expect(String(mergedArray)).toBe(String([1, 2, 3, 4, 5, 6]));
});
