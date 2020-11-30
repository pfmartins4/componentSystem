import mergeArrays from "helpers/mergeArray/mergeArray";
import isObj from "helpers/typeGuards/object/isObject";

const mergeObj = (target: any, ...sources: Array<object>): object => {
  if (sources.length === 0) {
    return { ...target };
  }
  let newRefTarget = { ...target };
  for (let i = 0; i < sources.length; i++) {
    let source: any = sources[i];
    console.log(`source ${i} `, source);
    for (let key in source) {
      if (isObj(source[key]) && isObj(source[key]))
        newRefTarget[key] = mergeObj(newRefTarget[key], source[key]);
      else newRefTarget[key] = source[key];
    }
  }

  return newRefTarget;
};

export default mergeObj;
