export function validateName(input) {
  const validName = input.length >= 2 ? true : false;
  return validName;
}

export function validateEmail(input) {
  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    input
  )
    ? true
    : false;
  return validEmail;
}

export function validateZip(input) {
  const validZip = input.length === 5 ? true : false;
  return validZip;
}

export function validateNumber(input) {
  const validName = input.length >= 1 ? true : false;
  return validName;
}
