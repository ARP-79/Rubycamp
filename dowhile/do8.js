let namaDepan = "user";
let username;
let puas;
let percobaan = 0;

// Tulis kode do-while loop di sini untuk generate username
do {
    percobaan++;
    
  
    let angkaAcak = percobaan === 1 ? 1234 : 5678; 
    username = namaDepan + angkaAcak;
    
    console.log("Percobaan " + percobaan + ": Username yang dihasilkan: " + username);
    
    
    puas = percobaan === 1 ? 'n' : 'y'; 
    console.log("Apakah Anda puas dengan username ini? (y/n): " + puas);

} while (puas === 'n');

console.log("Username final: " + username + " (dibuat dalam " + percobaan + " percobaan)");