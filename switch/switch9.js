let tombol = "SPACE";
// Tulis kode switch statement di sini

switch (tombol) {
  case "W":
    console.log("Karakter bergerak maju!");
    break;
  case "S":
    console.log("Karakter bergerak mundur!");
    break;
  case "A":
    console.log("Karakter bergerak ke kiri!");
    break;
  case "D":
    console.log("Karakter bergerak ke kanan!");
    break;
  case "SPACE":
    console.log("Tombol SPACE: Karakter melompat!");
    break;
  case "ESC":
    console.log("Game dihentikan sejenak (Pause)!");
    break;
  default:
    console.log("Tombol tidak valid.");
}