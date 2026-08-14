// Tulis function createDataStore di sini

let store = createDataStore();
store.insert({ id: 1, name: "Alice", department: "IT", salary: 5000 });
store.insert({ id: 2, name: "Bob", department: "HR", salary: 4500 });
store.insert({ id: 3, name: "Charlie", department: "IT", salary: 5500 });

console.log(store.find({ department: "IT" }));
console.log(store.update(2, { salary: 4800 }));
console.log(store.getStats());