let angka = 100;
let langkah = 0;

// Tulis kode while loop di sini untuk pembagian berulang
while (angka > 1) {
    langkah++;
    let hasilSebelumnya = angka;
    angka = angka / 2;
    console.log("Langkah " + langkah + ": " + hasilSebelumnya + " / 2 = " + angka);
}

console.log("Proses selesai setelah " + langkah + " langkah");