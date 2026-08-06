let statusCode = 404;
// Tulis kode switch statement di sini

switch (statusCode) {
    case 200:
        console.log("status 200: OK");
        break;
    case 404:
        console.log("Status 404: Not Found - Halaman tidak ditemukan");
        break;
    case 500:
        console.log("Status 500: Internal Server Error");
        break;
    case 403:
        console.log("Status 403: Forbidden");
        break;
    default:
        console.log("Status: Unknown Status");
} 