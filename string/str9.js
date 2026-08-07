function validateEmail(emailStr) {
  const cleanedEmail = emailStr.trim();

  const hasAt = cleanedEmail.includes('@');
  const hasDot = cleanedEmail.includes('.');
  const validLength = cleanedEmail.length >= 5; 
  const noSpaces = !cleanedEmail.includes(' ');

  const isValid = hasAt && hasDot && validLength && noSpaces;

  return {
    valid: isValid,
    email: cleanedEmail,
    checks: {
      hasAt: hasAt,
      hasDot: hasDot,
      validLength: validLength,
      noSpaces: noSpaces
    }
  };
}

console.log(validateEmail("user@example.com"));
console.log(validateEmail("invalid.email"));
console.log(validateEmail(" test@domain.co.id "));