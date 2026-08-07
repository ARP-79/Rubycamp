function extractText(text, start, end) {
  if (start >= 0 && end <= text.length && start <= end) {
    return {
      result: text.slice(start, end),
      success: true,
      original: text
    };
  } else {
    return {
      result: "",
      success: false,
      original: text
    };
  }
}

console.log(extractText("JavaScript", 0, 4));
console.log(extractText("Programming", 3, 7));
console.log(extractText("Hello", 10, 15));