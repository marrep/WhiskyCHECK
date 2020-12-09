export default function convertToEuro(number) {
  const convertNumber = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(number);
  return convertNumber;
}
