function manageStudents(students, operation, payload = {}) {
    switch (operation) {
        case "add": {
            const newStudent = {
                id: payload.id,
                name: payload.name,
                age: payload.age,
                category: payload.category,
                score: payload.score
            };

            students.push(newStudent);
            return students;
        }

        case "find": {
            return students.filter(student =>
                Object.entries(payload).every(
                    ([key, value]) => student[key] === value
                )
            );
        }

        case "statistics": {
            if (students.length === 0) {
                return {
                    total: 0,
                    averageScore: 0,
                    highestScore: 0,
                    lowestScore: 0
                };
            }

            const scores = students.map(student => student.score);

            return {
                total: students.length,
                averageScore: scores.reduce((sum, score) => sum + score, 0) / scores.length,
                highestScore: Math.max(...scores),
                lowestScore: Math.min(...scores)
            };
        }

        case "group": {
            return students.reduce((groups, student) => {
                const category = student.category;

                if (!groups[category]) {
                    groups[category] = [];
                }

                groups[category].push(student);

                return groups;
            }, {});
        }

        default:
            throw new Error("Operation tidak dikenal");
    }
}

const students = [
    { id: 1, name: "Andi", age: 20, category: "A", score: 85 },
    { id: 2, name: "Budi", age: 21, category: "B", score: 90 },
    { id: 3, name: "Citra", age: 20, category: "A", score: 75 }
];

manageStudents(students, "add", {
    id: 4,
    name: "Dina",
    age: 22,
    category: "B",
    score: 88
});

console.log(
    manageStudents(students, "find", { age: 20 })
);

console.log(
    manageStudents(students, "statistics")
);
console.log(
    manageStudents(students, "group")
);