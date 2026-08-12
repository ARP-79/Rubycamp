// Tulis function extractUserData di sini

let user = {
  id: 1,
  profile: {
    name: "John Doe",
    email: "john@example.com",
    address: {
      street: "Jl. Sudirman",
      city: "Jakarta",
      zipCode: "12345"
    }
  },
  preferences: {
    theme: "dark",
    language: "id"
  }
};
console.log(extractUserData(user));