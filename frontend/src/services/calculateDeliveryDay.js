export default function getFastestDelivery(today, deliveryTime) {
  let deliveryDay = 0;

  if (today === 0 || 6) {
    today = 1;
  }

  if (deliveryTime === 2 && today === 4) {
    deliveryDay = 1;
  } else if (deliveryTime === 2 && today === 5) {
    deliveryDay = 2;
  } else if (deliveryTime === 3 && today === 3) {
    deliveryDay = 1;
  } else if (deliveryTime === 3 && today === 4) {
    deliveryDay = 2;
  } else if (deliveryTime === 3 && today === 5) {
    deliveryDay = 3;
  } else {
    deliveryDay = today + deliveryTime;
  }

  return deliveryDay;
}
