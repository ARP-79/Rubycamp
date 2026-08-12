function validateArrayData(arr) {
  let numbers = 0;
  let strings = 0;
  let nulls = 0;
  let undefineds = 0;
  let cleaned = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    
    if (typeof item == 'number') {
      numbers++;
      cleaned.push(item);
    } else if (typeof item == 'string') {
      strings++;
    } else if (item == null) {
      nulls++;
    } else if (typeof item == 'undefined') {
      undefineds++;
    }
  }


  const isValid = numbers === arr.length;
  const allNumbers = numbers === arr.length;
  const hasNulls = nulls > 0;
  const hasUndefined = undefineds > 0;

  return {
    isValid: isValid,
    allNumbers: allNumbers,
    hasNulls: hasNulls,
    hasUndefined: hasUndefined,
    stats: {
      total: arr.length,
      numbers: numbers,
      strings: strings,
      nulls: nulls,
      undefined: undefineds
    },
    cleaned: cleaned
  };
}