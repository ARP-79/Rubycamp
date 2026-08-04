const prompt = require("prompt-sync")()

let angka;


// Tulis kode while loop di sini untuk validasi input
while (true) {
    let input = prompt("Masukkan angka 1-10:");
    angka = Number(input);

    if (input === null || input.trim() === "" || isNaN(angka) || angka < 1 || angka > 10) {
        console.log("Input tidak valid, masukkan angka 1-10");
    } else {
        break; // Keluar dari loop jika input sudah valid
    }
}

console.log("Angka valid yang dimasukkan: " + angka);