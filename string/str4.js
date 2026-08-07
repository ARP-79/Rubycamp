function searchInText(text, search) {
    const found = text.includes(search);
    
    const firstIndex = text.indexOf(search);
    
    let count = 0;
    if (found && search.length > 0) {
        const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escapedSearch, 'g');
        count = (text.match(regex) || []).length;
    }
    
    return {
        found: found,
        firstIndex: firstIndex,
        count: count
    };
}

console.log(searchInText("Hello world hello", "hello"));
console.log(searchInText("JavaScript is awesome", "Python"));
console.log(searchInText("test test test", "test"));