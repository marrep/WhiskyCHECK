export default function getFastestDelivery(offersData) {
  const offers = [];
  offersData.forEach((offer) => {
    offers.push(offer.deliveryTime);
  });
  return Math.min.apply(Math, offers);
}
