const prompt = require("prompt-sync")()

let password;
let percobaan = 0;
let maxPercobaan = 3;
let berhasil = false;

// Tulis kode while loop di sini untuk validasi password
while (percobaan < maxPercobaan) {
    password = prompt("Masukkan password:"); 
    
    if (password === "admin123") {
        berhasil = true;
        break; 
    } else {
        percobaan++;
        let sisaPercobaan = maxPercobaan - percobaan;
        if (sisaPercobaan > 0) {
            console.log("Password salah. Sisa percobaan: " + sisaPercobaan);
        }
    }
}

if (berhasil) {
    console.log("Login berhasil!");
} else {
    console.log("Akses ditolak. Terlalu banyak percobaan gagal.");
}