// Tulis function createProfile di sini
function createProfile(nama, status = "Member") {
    return `Profil: ${nama} (${status})`;
}

// Driver code untuk pengujian
let profil1 = createProfile("Budi");
let profil2 = createProfile("Sari", "Admin");
console.log(profil1);
console.log(profil2);