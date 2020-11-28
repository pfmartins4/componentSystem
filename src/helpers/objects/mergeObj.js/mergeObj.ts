import mergeArrays from "helpers/mergeArray/mergeArray";

const mergeObj = (...args: Array<object>): object => {
  const keyArrays: string[][] = args.map((obj: object) => Object.keys(obj));
  const mergedKeys = mergeArrays(keyArrays);
  console.log(mergedKeys);
  //return Object.assign(obj1, obj2);
  return {};
};

export default mergeObj;
