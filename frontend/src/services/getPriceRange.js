export default function getPriceRange(offersData) {
  const offers = [];
  offersData.forEach((offer) => {
    offers.push(offer.price);
  });
  if (offersData.length === 1) {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(offers);
  } else {
    return (
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(Math.min.apply(Math, offers)) +
      " - " +
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(Math.max.apply(Math, offers))
    );
  }
}
