const prompt = require('prompt-sync')();

let antrian = ["Budi", "Sari", "Andi"];
let nasabahDilayani = 0;
let adaNasabahBaru;

// Tulis kode do-while loop di sini untuk simulasi antrian bank
do {

    while (antrian.length > 0) {
        let nasabah = antrian.shift(); 
        console.log("Melayani nasabah: " + nasabah);
        nasabahDilayani++;

        if (antrian.length > 0) {
            console.log("Sisa antrian: " + antrian.length + " orang");
        } else {
            console.log("Antrian kosong.");
        }
    }

    
    adaNasabahBaru = prompt("Ada nasabah baru yang datang? (y/n):");

    if (adaNasabahBaru === 'y') {
        let namaBaru = prompt("Nasabah baru:");
        antrian.push(namaBaru); 
    }

} while (adaNasabahBaru === 'y' || antrian.length > 0);

console.log("Bank tutup. Total nasabah dilayani: " + nasabahDilayani);