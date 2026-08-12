function searchArray(arr, criteria) {
  const { type, value, condition } = criteria;
  
  let found = undefined;
  let filtered = [];
  
  if (type == "number") {
    if (condition == "greater") {
      found = arr.find(item => item > value);
      filtered = arr.filter(item => item > value);
    }
  } else if (type == "string") {
    if (condition == "contains") {
      found = arr.find(item => item.includes(value));
      filtered = arr.filter(item => item.includes(value));
    }
  }
  
  const includes = arr.includes(value);
  const count = filtered.length;
  
  return {
    found,
    filtered,
    includes,
    count
  };
}