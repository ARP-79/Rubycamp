const prompt = require("prompt-sync")()

let angkaRahasia = 7;
let tebakan;
let percobaan = 0;

// Tulis kode while loop di sini untuk game tebak angka
while (tebakan == angkaRahasia) {
    tebakan = parseInt(prompt("Masukkan tebakan angka Anda:"));
    percobaan++;

    if (tebakan < angkaRahasia) {
        console.log("Terlalu kecil! Coba lagi.");
    } else if (tebakan > angkaRahasia) {
        console.log("Terlalu besar! Coba lagi.");
    }
}

console.log("Selamat! Anda berhasil menebak dalam " + percobaan + " percobaan");