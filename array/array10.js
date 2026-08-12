function arrayAnalyzer(data) {
 
  const sum = data.reduce((total, num) => total + num, 0);
  const average = sum / data.length;
  const min = Math.min(...data);
  const max = Math.max(...data);

  const sortedData = [...data].sort((a, b) => a - b);
  const mid = Math.floor(sortedData.length / 2);

  const median =
    sortedData.length % 2 == 0
      ? (sortedData[mid - 1] + sortedData[mid]) / 2
      : sortedData[mid];

  
  const frequency = {};
  data.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  const highestFrequency = Math.max(...Object.values(frequency));

  const mode =
    highestFrequency > 1
      ? Number(
          Object.keys(frequency).find(
            num => frequency[num] == highestFrequency
          )
        )
      : null;

  return {
    original: [...data],

    length: data.length,

    statistics: {
      sum: sum,
      average: Number(average.toFixed(2)),
      min: min,
      max: max,
      median: median,
      mode: mode
    },

    transformations: {
      doubled: data.map(num => num * 2),
      squared: data.map(num => num ** 2),
      filtered: data.filter(num => num > 4),
      reversed: [...data].reverse()
    },

    sorted: {
      ascending: [...data].sort((a, b) => a - b),
      descending: [...data].sort((a, b) => b - a)
    },

    validation: {
      allNumbers: data.every(num => typeof num == "number"),
      hasNegatives: data.some(num => num < 0),
      hasZeros: data.some(num => num == 0)
    }
  };
}

let data = [5, 2, 8, 1, 9, 3];
let result = arrayAnalyzer(data);

console.log(result);