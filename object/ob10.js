function objectAnalyzer(obj) {
    let depth = 0;
    let totalKeys = 0;
    let arrayCount = 0;
    let objectCount = 0;
    let primitiveCount = 0;

    function analyze(current, currentDepth) {
        if (currentDepth > depth) {
            depth = currentDepth;
        }

        if (Array.isArray(current)) {
            arrayCount++;
            for (let item of current) {
                if (typeof item == 'object' && item !== null) {
                    analyze(item, currentDepth + 1);
                } else {
                    primitiveCount++;
                }
            }
        }
        else if (typeof current == 'object' && current !== null) {
            objectCount++;
            let keys = Object.keys(current);
            totalKeys += keys.length;

            for (let key in current) {
                let value = current[key];
                if (typeof value == 'object' && value !== null) {
                    analyze(value, currentDepth + 1);
                } else {
                    primitiveCount++;
                }
            }
        }
    }

    if (typeof obj == 'object' && obj !== null) {
        analyze(obj, 1);
    }

    return {
        structure: {
            depth: depth,
            totalKeys: totalKeys,
            arrayCount: arrayCount,
            objectCount: objectCount,
            primitiveCount: primitiveCount
        },
        analysis: {
        
        }
    };
}

let complexData = {
    users: [
        { id: 1, name: "Alice", posts: [{ title: "Hello", likes: 10 }] },
        { id: 2, name: "Bob", posts: [{ title: "World", likes: 5 }, { title: "JavaScript", likes: 20 }] }
    ],
    settings: {
        theme: "dark",
        notifications: { email: true, push: false }
    },
    metadata: {
        version: "1.0",
        lastUpdated: "2023-01-01"
    }
};

console.log(objectAnalyzer(complexData));