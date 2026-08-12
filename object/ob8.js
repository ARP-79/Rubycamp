// Tulis function validateObjectSchema di sini

let user = {
  name: "John",
  email: "john@example.com",
  age: 25,
  address: {
    street: "Jl. Sudirman",
    city: "Jakarta"
  }
};

let schema = {
  name: { type: "string", required: true, minLength: 2 },
  email: { type: "string", required: true, pattern: /@/ },
  age: { type: "number", required: true, min: 18, max: 100 },
  address: {
    type: "object",
    required: true,
    properties: {
      street: { type: "string", required: true },
      city: { type: "string", required: true }
    }
  }
};

console.log(validateObjectSchema(user, schema));