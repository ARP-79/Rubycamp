let totalBelanja = 350000;
let diskonPersen = 0;

// Tulis kode if-else if statement di sini
if (totalBelanja >= 500000) {
    diskonPersen = 20;
} else if (totalBelanja >= 200000) {
    diskonPersen = 10;
} else if (totalBelanja >= 100000) {
    diskonPersen = 5;
} else {
    diskonPersen = 0;
}

// Menghitung jumlah diskon dan total yang harus dibayar
let nilaiDiskon = (diskonPersen / 100) * totalBelanja;
let totalBayar = totalBelanja - nilaiDiskon;

// Menampilkan output sesuai format
console.log(`Total belanja: Rp ${totalBelanja}`);
console.log(`Diskon: ${diskonPersen}%`);
console.log(`Total bayar: Rp ${totalBayar}`);