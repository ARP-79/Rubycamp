function analyzeObject(obj) {
  const keys = Object.keys(obj);

  const values = Object.values(obj);
  
  const propertyCount = keys.length;
  
  const isEmpty = propertyCount === 0;

  return {
    propertyCount: propertyCount,
    keys: keys,
    values: values,
    isEmpty: isEmpty
  };
}

let person = { name: "John", age: 25, city: "Jakarta" };
let empty = {};

console.log(analyzeObject(person));
console.log(analyzeObject(empty));