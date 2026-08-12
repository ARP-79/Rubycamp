function aggregateArray(arr) {
  const isNumberArray = arr.every(item => typeof item == "number");

  if (isNumberArray) {
    const sum = arr.reduce((acc, num) => acc + num, 0);

    const product = arr.reduce((acc, num) => acc * num, 1);

    const max = Math.max(...arr);
    const min = Math.min(...arr);

    const sortedAsc = [...arr].sort((a, b) => a - b);
    const sortedDesc = [...arr].sort((a, b) => b - a);

    return {
      original: arr,
      sum: sum,
      product: product,
      max: max,
      min: min,
      sortedAsc: sortedAsc,
      sortedDesc: sortedDesc
    };
  }

  const concatenated = arr.reduce((acc, str) => acc + str, "");

  const longest = arr.reduce((longest, str) =>
    str.length > longest.length ? str : longest
  );

  const shortest = arr.reduce((shortest, str) =>
    str.length < shortest.length ? str : shortest
  );

  const sortedAsc = [...arr].sort();
  const sortedDesc = [...arr].sort().reverse();

  return {
    original: arr,
    concatenated: concatenated,
    longest: longest,
    shortest: shortest,
    sortedAsc: sortedAsc,
    sortedDesc: sortedDesc
  };
}

console.log(aggregateArray([3, 1, 4, 1, 5, 9, 2, 6]));

console.log(
  aggregateArray(["banana", "apple", "cherry", "date"])
);