function cleanAndFormat(text, width) {
    const cleaned = text.trim();
    
    const totalPadding = width - cleaned.length;
    
    if (totalPadding <= 0) {
        return {
            cleaned: cleaned,
            padded: cleaned,
            length: width
        };
    }
    const padStartLength = Math.floor(totalPadding / 2);
    const padEndLength = totalPadding - padStartLength;
    
    const padded = cleaned
        .padStart(cleaned.length + padStartLength, ' ')
        .padEnd(width, ' ');

    return {
        cleaned: cleaned,
        padded: padded,
        length: width
    };
}
console.log(cleanAndFormat(" Hello   World  ", 15));
console.log(cleanAndFormat("JavaScript", 12));
console.log(cleanAndFormat(" Code  ", 8));