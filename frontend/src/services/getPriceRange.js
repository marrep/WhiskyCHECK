export default function getPriceRange(offersData) {
  const offers = [];
  offersData.forEach((offer) => {
    offers.push(offer.price);
  });
  if (offersData.length === 1) {
    return `${offers}€`;
  } else {
    return `${Math.min.apply(Math, offers)}€ - ${Math.max.apply(
      Math,
      offers
    )}€`;
  }
}
