function analyzeCharacters(str) {
  // Membuat array kosong untuk menampung objek hasil
  let result = [];

  for (let i = 0; i < str.length; i++) {

    let char = str.charAt(i);

    result.push({
      char: char,
      position: i
    });
  }

  return result;
}

console.log(analyzeCharacters("Hi"));
console.log(analyzeCharacters("Code"));