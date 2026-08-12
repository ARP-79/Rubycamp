function validateArrayData(arr) {
  let numbers = arr.filter(item => typeof item == "number");
  let strings = arr.filter(item => typeof item == "string");
  let nulls = arr.filter(item => item == null);
  let undefineds = arr.filter(item => item == undefined);

  const allNumbers = arr.every(item => typeof item == "number");

  const hasNulls = nulls.length > 0;
  const hasUndefined = undefineds.length > 0;

  const isValid = allNumbers && !hasNulls && !hasUndefined;

  return {
    isValid,
    allNumbers,
    hasNulls,
    hasUndefined,
    stats: {
      total: arr.length,
      numbers: numbers.length,
      strings: strings.length,
      nulls: nulls.length,
      undefined: undefineds.length
    },
    cleaned: numbers
  };
}

let data1 = [1, 2, 3, 4, 5];
let data2 = [1, "2", 3, null, 5, undefined];

console.log(validateArrayData(data1));
console.log(validateArrayData(data2));