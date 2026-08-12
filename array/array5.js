function arrayOperations(arr, start, deleteCount, items) {
    const original = [...arr];

    const sliced = original.slice(start, start + deleteCount);

    const spliced = [...original];
    
    const removed = spliced.splice(start, deleteCount, ...items);

    return {
        original: original,
        sliced: sliced,
        spliced: spliced,
        removed: removed
    };
}

console.log(arrayOperations([1, 2, 3, 4, 5], 1, 2, [10, 20]));
console.log(arrayOperations(["a", "b", "c", "d"], 0, 1, ["x"]));