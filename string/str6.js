function processWords(sentence) {
    const wordsArray = sentence.split(" ");
    
    const wordCount = wordsArray.length;
    
    const reversedSentence = [...wordsArray].reverse().join(" ");
    
    return {
        words: wordsArray,
        count: wordCount,
        reversed: reversedSentence
    };
}

console.log(processWords("Hello beautiful world"));
console.log(processWords("JavaScript is awesome"));