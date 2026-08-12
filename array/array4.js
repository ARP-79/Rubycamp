function manageQueue(arr, operations) {
    let queue = [...arr];
    
    let stats = {
        enqueued: 0,
        dequeued: 0,
        operations: operations.length
    };

    for (let op of operations) {
        if (op.startsWith("enqueue:")) {
            // Mengambil nilai setelah tanda titik dua
            let value = op.split(":")[1];
            
            if (!isNaN(value) && value.trim() !== "") {
                value = Number(value);
            }
            
            queue.push(value);
            stats.enqueued++;
        } else if (op === "dequeue") {
            if (queue.length > 0) {
                queue.shift(); 
            }
            stats.dequeued++;
        }
    }

    return {
        result: queue,
        stats: stats
    };
}
console.log(manageQueue([1, 2], ["enqueue:3", "dequeue", "enqueue:4"]));
console.log(manageQueue([], ["enqueue:x", "enqueue:y", "dequeue"]));