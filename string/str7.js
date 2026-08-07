function replaceText(text, target, replacement) {
    const parts = text.split(target);
    
    
    const result = parts.join(replacement);
    
    return {
        result: result,
        replacements: replacements,
        original: text
    };
}

console.log(replaceText("Hello world hello", "hello", "hi"));
console.log(replaceText("test test test", "test", "exam"));
console.log(replaceText("JavaScript", "Python", "Java"));