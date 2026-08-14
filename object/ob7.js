function transformObjectArray(data, config) {
  let result = [...data];

  if (config.filter) {
    const { key, operator, value } = config.filter;

    result = result.filter(item => {
      switch (operator) {
        case ">":
          return item[key] > value;
        case ">=":
          return item[key] >= value;
        case "<":
          return item[key] < value;
        case "<=":
          return item[key] <= value;
        case "===":
          return item[key] === value;
        case "!==":
          return item[key] !== value;
        default:
          throw new Error(`Operator tidak didukung: ${operator}`);
      }
    });
  }

  // MAP
  if (config.map) {
    result = result.map(item => {
      const newItem = { ...item };

      for (const [newKey, expression] of Object.entries(config.map)) {
        newItem[newKey] = Function(
          ...Object.keys(item),
          `return ${expression}`
        )(...Object.values(item));
      }

      return newItem;
    });
  }

  if (config.sort) {
    const { key, order = "asc" } = config.sort;

    result.sort((a, b) => {
      if (a[key] === b[key]) return 0;

      const comparison = a[key] > b[key] ? 1 : -1;
      return order === "desc" ? -comparison : comparison;
    });
  }

  if (config.group) {
    result = result.reduce((groups, item) => {
      const groupKey = item[config.group];

      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }

      groups[groupKey].push(item);

      return groups;
    }, {});
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