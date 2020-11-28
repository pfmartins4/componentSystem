/**
 * function recevies N arrays e merge
 * them into a single array without any repetition
 * @param Array
 */

const mergeArrays = (...args: Array<any[]>) => {
  let merged = ([] as any[]).concat(...args);
  let sanitized = Array.from(new Set(merged));
  return sanitized;
};

export default mergeArrays;