let bahasa = "EN"; 
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
    console.log("ようこそ！本日はどのようなご用件でしょうか？");
    break;

  case "kr":
  case "KR":
    console.log("Language: Korean");
    console.log("환영합니다! 오늘 무엇을 도와드릴까요?");
    break;
  case "id":
  case "ID":
    console.log("Language: bahasa Indonesia");
    console.log("Selamat datang! Ada yang bisa kami bantu hari ini?");
    break;
  default:
    console.log("Language not supported");
}