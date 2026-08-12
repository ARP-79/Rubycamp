function analyzeElements(arr) {
  return arr.map((item, index) => {
    return {
      value: item,
      index: index,
      type: typeof item
    };
  });
}

// --- Driver Code ---
console.log(analyzeElements([10, "hello", true]));
console.log(analyzeElements([1, 2, 3]));