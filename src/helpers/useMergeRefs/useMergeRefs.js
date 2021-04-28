import { useEffect, useRef } from "react";

const useMergeRefs = (...refs) => {
  const target = useRef();
  useEffect(() => {
    for (let i = 0; i < refs.length; i++) {
      if (refs[i]) {
        if (typeof refs[i] === "function") {
          ref(target.current);
        } else {
          refs[i].current = target.current;
        }
      }
    }
  }, [refs]);
  return target;
};

export default useMergeRefs;
