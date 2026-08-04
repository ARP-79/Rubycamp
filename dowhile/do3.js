const prompt = require('prompt-sync')();

let password;
let valid = false;

// Tulis kode do-while loop di sini untuk validasi password
do {
    // Meminta input dari user (menggunakan prompt jika dijalankan di browser)
    password = prompt("Buat password Anda: ");
    console.log("Buat password Anda: " + password);

    // Kriteria 1: Minimal 6 karakter
    let punyaPanjangCukup = password.length >= 6;
    
    // Kriteria 2: Mengandung angka (mengecek apakah ada karakter angka 0-9)
    let punyaAngka = /\d/.test(password);

    // Validasi gabungan
    if (punyaPanjangCukup && punyaAngka) {
        valid = true;
        console.log("Password valid!");
    } else {
        console.log("Password tidak valid! Harus minimal 6 karakter dan mengandung angka.");
    }

} while (!valid);

console.log("Password berhasil dibuat: " + password);