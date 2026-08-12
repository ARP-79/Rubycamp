function processObjectData(obj) {
  const original = { ...obj };

  const strings = {};
  const numbers = {};
  const booleans = {};

  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      strings[key] = obj[key];
    } else if (typeof obj[key] === 'number') {
      numbers[key] = obj[key];
    } else if (typeof obj[key] === 'boolean') {
      booleans[key] = obj[key];
    }
  }

  const transformed = {
    NAME: obj.name.toUpperCase(),
    PRICE: obj.price * 2,
    INSTOCK: obj.inStock,
    CATEGORY: obj.category.toUpperCase(),
    RATING: obj.rating * 2
  };
  return {
    original: original,
    byType: {
      strings: strings,
      numbers: numbers,
      booleans: booleans
    },
    transformed: transformed
  };
}
let data = {
  name: "Product A",
  price: 100,
  inStock: true,
  category: "Electronics",
  rating: 4.5
};

console.log(processObjectData(data));