export default function countOffers(offersData) {
  const offers = offersData.length;
  if (offers === 1) {
    return `${offers} Angebot`;
  } else {
    return `${offers} Angebote`;
  }
}
