const prompt = require('prompt-sync')();

let angka;
let lanjut;

// Tulis kode do-while loop di sini
do {
    // 1. Meminta user memasukkan angka
    angka = parseInt(prompt("Masukkan angka: "));
    
    // 2. Menampilkan kuadrat dari angka tersebut
    let kuadrat = angka * angka;
    console.log(`Kuadrat dari ${angka} adalah: ${kuadrat}`);
    
    // 3. Menanyakan apakah user ingin melanjutkan
    lanjut = prompt("Apakah ingin melanjutkan? (y/n): ");

} while (lanjut === 'y' || lanjut === 'Y'); // Loop terus berjalan jika input adalah 'y'

console.log("Terima kasih telah menggunakan program!");