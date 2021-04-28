import mergeObj from "../mergeObj";

const Obj1 = {
  a: 1,
  b: 2,
  c: "dado",
};
const Obj2 = {
  a: 1,
  b: 3,
  d: "arroz",
};
const Obj3 = {
  a: 1,
  b: 3,
  d: "batata",
};

const Obj4 = {
  a: 1,
  b: 3,
  c: "xadrez",
};

const merged1In2 = {
  a: 1,
  b: 2,
  c: "dado",
  d: "arroz",
};
const merged1In3 = {
  a: 1,
  b: 2,
  c: "dado",
  d: "batata",
};
const merged2In4 = {
  /* 
  a: 1,
  b: 3,
  d: "arroz",

   a: 1,
  b: 3,
  c: "xadrez",
  */
  a: 1,
  b: 3,
  c: "xadrez",
  d: "arroz",
};

const Obj5 = {
  obj1: Obj1,
  obj2: Obj2,
};

const Obj6 = {
  obj1: Obj3,
  obj2: Obj4,
};

const merged5In6 = {
  obj1: merged1In3,
  obj2: merged2In4,
};

describe("Object merging", () => {
  test("simple merge", () => {
    expect(mergeObj(Obj2, Obj1)).toEqual(merged1In2);
    expect(mergeObj(Obj3, Obj1)).toEqual(merged1In3);
    expect(mergeObj(Obj4, Obj2)).toEqual(merged2In4);
  });
  test("deep merge", () => {
    expect(mergeObj(Obj6, Obj5)).toEqual(merged5In6);
  });
});
