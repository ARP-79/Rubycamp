let angkaRandom;
let percobaan = 0;

// Tulis kode do-while loop di sini
do {
    angkaRandom = Math.floor(Math.random() * 100) + 1;
    
    percobaan++;

    if (angkaRandom % 2 === 0) {
        console.log("percobaan " + percobaan + ": " + angkaRandom + " (genap, selesai!)");
    } else {
        console.log("percobaan " + percobaan + ": " + angkaRandom + " (ganjil, coba lagi)");
    }

} while (angkaRandom % 2 !== 0); // Loop terus berjalan jika angka yang didapat ganjil

console.log("Angka genap ditemukan: " + angkaRandom + " dalam " + percobaan + " percobaan");