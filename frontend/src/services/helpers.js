export function getCartImage(productData, cartId) {
  const foundIndex = productData.findIndex((elem) => elem.id === cartId);
  return productData[foundIndex].image;
}

export function countOffers(offersData) {
  const offers = offersData.length;
  if (offers === 1) {
    return `${offers} Angebot`;
  } else {
    return `${offers} Angebote`;
  }
}

export function checkOnStock(offersData) {
  return offersData.some((offer) => offer.onStock === true)
    ? "Auf Lager."
    : "Leider nicht verfügbar.";
}

export function getPriceRange(offersData) {
  const offers = [];
  offersData.forEach((offer) => {
    offers.push(offer.price);
  });
  if (offersData.length === 1) {
    convertToEuro(offers);
  } else {
    return (
      convertToEuro(Math.min.apply(Math, offers)) +
      " - " +
      convertToEuro(Math.max.apply(Math, offers))
    );
  }
}

export function convertToEuro(number) {
  const convertNumber = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(number);
  return convertNumber;
}

export function getFastestDeliveryDay(offers) {
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

export function getDeliveryDay(deliveryTime) {
  const date = new Date();
  let today = date.getDay();
  const weekDay = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ];

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

  return `Lieferung bis ${weekDay[deliveryDay]}`;
}
