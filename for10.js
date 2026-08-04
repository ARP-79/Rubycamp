let a = 0, b = 1;
console.log(a); // angka pertama
console.log(b); // angka kedua

// Tulis kode for loop di sini untuk 6 angka berikutnya
for (let i = 0; i < 6; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}