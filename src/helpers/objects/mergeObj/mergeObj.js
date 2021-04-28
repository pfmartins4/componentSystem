import isObj from "helpers/typeGuards/object/isObject";

const mergeObj = (target, ...sources) => {
  if (sources.length === 0) {
    return { ...target };
  }
  let newRefTarget = { ...target };
  for (let i = 0; i < sources.length; i++) {
    let source = sources[i];
    for (let key in source) {
      if (isObj(source[key]) && isObj(source[key]))
        newRefTarget[key] = mergeObj(newRefTarget[key], source[key]);
      else newRefTarget[key] = source[key];
    }
  }

  return newRefTarget;
};

export default mergeObj;
