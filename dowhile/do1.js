const prompt = require('prompt-sync')();

let angka;
let lanjut;

// Tulis kode do-while loop di sini
do {
    // 1. Meminta user memasukkan angka
    angka = parseInt(prompt("Masukkan angka: "));
    
   
    let kuadrat = angka * angka;
    console.log(`Kuadrat dari ${angka} adalah: ${kuadrat}`);
    
    lanjut = prompt("Apakah ingin melanjutkan? (y/n): ");

} while (lanjut === 'y' || lanjut === 'Y'); 

console.log("Terima kasih telah menggunakan program!");