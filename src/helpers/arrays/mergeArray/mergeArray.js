/**
 * function recevies N arrays e merge
 * them into a single array without any repetition
 * PS: No deep merge
 * @param Array of Arrays
 */

const mergeArrays = (...args) => {
  let merged = [].concat(...args);
  let sanitized = Array.from(new Set(merged));
  return sanitized;
};

export default mergeArrays;
