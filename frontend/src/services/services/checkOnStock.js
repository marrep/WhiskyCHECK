export default function checkOnStock(offersData) {
  return offersData.some((offer) => offer.onStock === true)
    ? "Auf Lager."
    : "Leider nicht verfügbar.";
}
