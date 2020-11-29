import getFastestDelivery from "./getFastestDelivery";
import calculateDeliveryDay from "./calculateDeliveryDay";

export default function getDeliverDay(offers) {
  const weekDay = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ];

  const date = new Date();
  const deliveryTime = getFastestDelivery(offers);
  const today = date.getDay();
  const deliveryDay = calculateDeliveryDay(today, deliveryTime);

  return `Lieferung bis ${weekDay[deliveryDay]}`;
}
