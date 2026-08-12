function transformObjectArray(dataArray, config) {
  let result = [...dataArray];

  if (config.filter) {
    const { key, operator, value } = config.filter;
    result = result.filter(item => {
      const itemValue = item[key];
      if (operator === ">=") return itemValue >= value;
      if (operator === ">") return itemValue > value;
      if (operator === "<=") return itemValue <= value;
      if (operator === "<") return itemValue < value;
      if (operator === "===") return itemValue === value;
      return true;
    });
  }

  if (config.map) {
      const [newKey, formulaStr] = Object.entries(config.map)[0];

    result = result.map(item => {
      const newItem = { ...item };

      let evaluableStr = formulaStr;
      Object.keys(item).forEach(k => {
        evaluableStr = evaluableStr.replace(new RegExp(`\\b${k}\\b`, 'g'), item[k]);
      });

      newItem[newKey] = new Function(`return ${evaluableStr}`)();
      return newItem;
    });
  }

  if (config.sort) {
    const { key, order } = config.sort;
    result.sort((a, b) => {
      if (a[key] < b[key]) return order === "desc" ? 1 : -1;
      if (a[key] > b[key]) return order === "desc" ? -1 : 1;
      return 0;
    });
  }

  if (config.group) {
    const groupKey = config.group;
    const grouped = {};

    result.forEach(item => {
      const groupValue = item[groupKey];
      if (!grouped[groupValue]) {
        grouped[groupValue] = [];
      }
      grouped[groupValue].push(item);
    });

    return grouped;
  }

  return result;
}


let products = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics", rating: 4.5 },
  { id: 2, name: "Phone", price: 500, category: "Electronics", rating: 4.2 },
  { id: 3, name: "Book", price: 20, category: "Education", rating: 4.8 }
];

let config = {
  filter: { key: "price", operator: ">=", value: 100 },
  map: { priceWithTax: "price * 1.1" },
  sort: { key: "rating", order: "desc" },
  group: "category"
};

console.log(transformObjectArray(products, config));