function createCalculator() {
  let history = [];

  function saveOperation(operation, result) {
    history.push({
      operation,
      result
    });

    return result;
  }

  return {
    add(a, b) {
      return saveOperation(`${a} + ${b}`, a + b);
    },

    multiply(a, b) {
      return saveOperation(`${a} * ${b}`, a * b);
    },

    divide(a, b) {
      if (b === 0) {
        throw new Error("Tidak bisa membagi dengan nol");
      }

      return saveOperation(`${a} / ${b}`, a / b);
    },

    getHistory() {
      return [...history];
    },

    reset() {
      history = [];
    }
  };
}

const calculator = createCalculator();

console.log(calculator.add(5, 3));      
console.log(calculator.multiply(4, 2));   
console.log(calculator.divide(10, 2));    

console.log(calculator.getHistory());