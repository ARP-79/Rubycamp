let bahasa = "EN"; // Driver code dari soal
// Tulis kode switch statement di sini

switch (bahasa) {
  case "en":
    case "EN":
    console.log("Language: English");
    console.log("Welcome! How can we help you today?");
    break;

  case "jp":
  case "JP":
    console.log("Language: Japanese");
    console.log("Kon'ichiwa");
    break;

  case "kr":
  case "KR":
    console.log("Language: Korean");
    console.log("Annyeonghaseyo");
    break;
  case "id":
  case "ID":
    console.log("Language: bahasa Indonesia");
    console.log("Apa Kabar?");
    break;
  default:
    console.log("Language not supported");
}