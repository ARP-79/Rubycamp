function transformArray(arr, operation) {
  let transformed = [];
  let sum = 0;

  arr.forEach((num, index) => {
    let dynamicValue = num * (operation.multiply || 1) + (operation.add || 0);
    transformed.push(dynamicValue);
    
    sum += dynamicValue;

    if (operation.logEach) {
      console.log(`Processing ke-${index + 1}: ${num} -> ${dynamicValue}`);
    }
  });

  let average = transformed.length > 0 ? sum / transformed.length : 0;

  return {
    original: arr,
    transformed: transformed,
    stats: {
      processed: arr.length,
      sum: sum,
      average: average
    }
  };
}
let numbers =
console.log(transformArray(numbers, {
  multiply: 2,
  add: 1,
  logEach: true
}));