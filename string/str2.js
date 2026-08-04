function analyzeCharacters(str) {
  // Membuat array kosong untuk menampung objek hasil
  let result = [];

  // Menggunakan 'String length' untuk batas perulangan 'for loop'
  for (let i = 0; i < str.length; i++) {
    // Menggunakan 'charAt' untuk mengambil karakter pada indeks ke-i
    let char = str.charAt(i);

    // Membuat 'array of objects' dengan mendorong objek baru ke dalam array
    result.push({
      char: char,
      position: i
    });
  }

  // Mengembalikan hasil akhir
  return result;
}

// Driver code untuk pengujian
console.log(analyzeCharacters("Hi"));
console.log(analyzeCharacters("Code"));