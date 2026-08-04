let skor = 85;
// Tulis kode if-else if-else statement di sini

let grade;

if (skor >= 90) {
    grade = "A";
} else if (skor >= 80) {
    grade = "B";
} else if (skor >= 70) {
    grade = "C";
} else if (skor >= 60) {
    grade = "D";
} else {
    grade = "E";
}

// Untuk menampilkan output sesuai contoh di gambar
console.log("Skor: " + skor);
console.log("Grade: " + grade);