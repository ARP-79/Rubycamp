let waktu = 10;
let tombolDitekan = false;

// Simulasi: tombol akan ditekan pada detik ke-7
// Tulis kode while loop di sini untuk countdown timer
while (waktu > 0) {
    console.log("Countdown: " + waktu);
    
    // Menyimulasikan tombol ditekan pada detik ke-7 sesuai contoh output
    if (waktu === 7) {
        tombolDitekan = true;
        break; // Keluar dari loop karena tombol ditekan
    }
    
    waktu--;
}

if (tombolDitekan) {
    console.log("Timer dihentikan oleh user pada detik ke-" + waktu);
} else {
    console.log("Countdown selesai!");
}