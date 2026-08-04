const prompt = require("prompt-sync")()

let pilihan;

// Tulis kode while loop di sini untuk sistem menu
while (pilihan !== 4) {
    console.log("=== MENU KALKULATOR ===");
    console.log("1. Tambah");
    console.log("2. Kurang");
    console.log("3. Kali");
    console.log("4. Keluar");
    

    pilihan = parseInt(prompt("Pilih menu (1-4):"));

    if (pilihan === 1) {
        console.log("Pilih menu (1-4): Anda memilih Tambah");
    } else if (pilihan === 2) {
        console.log("Pilih menu (1-4): Anda memilih Kurang");
    } else if (pilihan === 3) {
        console.log("Pilih menu (1-4): Anda memilih Kali");
    } else if (pilihan === 4) {
        console.log("Pilih menu (1-4): Terima kasih telah menggunakan program!");
    } else {
        console.log("Pilihan tidak valid. Silakan coba lagi.");
    }
}

console.log("Terima kasih telah menggunakan program!");