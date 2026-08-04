let angka1 = 10;
let angka2 = 3;
let operator = "/";

// Tulis kode if-else if-else statement di sini
if (operator === "+") {
    console.log(`${angka1} + ${angka2} = ${angka1 + angka2}`);
} else if (operator === "-") {
    console.log(`${angka1} - ${angka2} = ${angka1 - angka2}`);
} else if (operator === "*") {
    console.log(`${angka1} * ${angka2} = ${angka1 * angka2}`);
} else if (operator === "/") {
    
    if (angka2 !== 0) {
        let hasil = angka1 / angka2;
        
        console.log(`${angka1} / ${angka2} = ${hasil.toFixed(2)}`);
    } else {
        console.log("Error: Pembagian dengan nol tidak diperbolehkan");
    }
} else {
    console.log("Operator tidak valid");
}