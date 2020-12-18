import convertToEuro from "./convertToEuro";

export default function getPriceRange(offersData) {
  const offers = [];
  offersData.forEach((offer) => {
    offers.push(offer.price);
  });
  if (offersData.length === 1) {
    return convertToEuro(offers);
  } else {
    return (
      convertToEuro(Math.min.apply(Math, offers)) +
      " - " +
      convertToEuro(Math.max.apply(Math, offers))
    );
  }
}
