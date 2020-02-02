//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

function validatePIN (pin) {
  return /^(\d{4})(\d{2})?$/.test(pin)
}
