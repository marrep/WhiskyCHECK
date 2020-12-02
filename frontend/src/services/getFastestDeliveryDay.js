import getDeliveryDay from "./getDeliveryDay";

export default function getFastestDeliverDay(offers) {
  function getFastestDelivery(offersData) {
    const offers = [];
    offersData.forEach((offer) => {
      offers.push(offer.deliveryTime);
    });
    return Math.min.apply(Math, offers);
  }

  const deliveryTime = getFastestDelivery(offers);
  const fastestDeliveryday = getDeliveryDay(deliveryTime);

  return fastestDeliveryday;
}
