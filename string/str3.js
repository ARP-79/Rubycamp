function convertCase(text, mode) {
    switch (mode) {
        case "upper":
            return text.toUpperCase();
        case "lower":
            return text.toLowerCase();
        case "title":
            return text
                .toLowerCase()
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
        default:
            return text; 
    }
}

console.log(convertCase("hello world", "upper")); // Output: HELLO WORLD
console.log(convertCase("HELLO WORLD", "lower")); // Output: hello world
console.log(convertCase("hello world", "title")); // Output: Hello World