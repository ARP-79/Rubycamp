let jenisKendaraan = "mobil";
let durasi = 3; // jam

let tarifPerJam = 0;
let totalBayar = 0;
let isValid = true;

if (jenisKendaraan === "motor") {
    tarifPerJam = 2000;
} else if (jenisKendaraan === "mobil") {
    tarifPerJam = 5000;
} else if (jenisKendaraan === "truk") {
    tarifPerJam = 10000;
} else {
    isValid = false;
    console.log("Kendaraan tidak diizinkan");
}

if (isValid) {
    totalBayar = tarifPerJam * durasi;
    
    console.log(`Jenis kendaraan: ${jenisKendaraan}`);
    console.log(`Durasi parkir: ${durasi} jam`);
    console.log(`Tarif per jam: Rp ${tarifPerJam}`);
    console.log(`Total bayar: Rp ${totalBayar}`);
}