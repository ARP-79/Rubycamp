const prompt = require('prompt-sync')();
let soal = ["5 + 3 = ?", "10 - 4 = ?", "7 * 2 = ?"];
let jawaban = [8, 6, 14];
let jawabanUser;
let lanjut;
let nomorSoal = 0;
let benar = 0;

// Tulis kode do-while loop di sini untuk kuis
do {
    console.log("Soal " + (nomorSoal + 1) + ": " + soal[nomorSoal]);
    jawabanUser = parseInt(prompt("Jawaban Anda: "));
    console.log("Jawaban Anda: " + jawabanUser);

    if (jawabanUser === jawaban[nomorSoal]) {
        console.log("Benar!");
        benar++;
    } else {
        console.log("Salah! Jawaban yang benar: " + jawaban[nomorSoal]);
    }

    nomorSoal++;

    if (nomorSoal < soal.length) {
        lanjut = prompt("Lanjut ke soal berikutnya? (y/n): ");
        console.log("Lanjut ke soal berikutnya? (y/n): " + lanjut);
    } else {
        lanjut = "n"; 
    }

} while (lanjut === "y" && nomorSoal < soal.length);

console.log("Kuis selesai! Skor: " + benar + "/" + nomorSoal);