const prompt = require("prompt-sync")()

let password;
let percobaan = 0;
let maxPercobaan = 3;
let berhasil = false;

// Tulis kode while loop di sini untuk validasi password
while (percobaan < maxPercobaan) {
    // Meminta input password dari user (menggunakan prompt jika dijalankan di browser)
    password = prompt("Masukkan password:"); 
    
    // Anggap password yang benar adalah "admin123" sesuai contoh output
    if (password === "admin123") {
        berhasil = true;
        break; // Keluar dari loop jika login berhasil
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