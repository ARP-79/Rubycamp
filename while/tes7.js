let waktu = 10;
let tombolDitekan = false;

// Tulis kode while loop di sini untuk countdown timer
while (waktu > 0) {
    console.log("Countdown: " + waktu);
    
    if (waktu === 7) {
        tombolDitekan = true;
        break; 
    }
    
    waktu--;
}

if (tombolDitekan) {
    console.log("Timer dihentikan oleh user pada detik ke-" + waktu);
} else {
    console.log("Countdown selesai!");
}