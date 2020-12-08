import { useState } from "react";

export default function useOffers() {
  const [selectedOffer, setSelectedOffer] = useState([]);

  return {
    selectedOffer,
    selectNewOffer,
    checkAvailability,
    setSelectedOffer,
    selectDefaultOffer,
    countOffers,
  };

  function checkAvailability(selectedOffer) {
    if (selectedOffer.onStock) {
      return true;
    } else {
      return false;
    }
  }

  function selectNewOffer(id, offerDetails) {
    const newOffer = offerDetails.find((element) => element.id === id);
    setSelectedOffer(newOffer);
    return newOffer;
  }

  function selectDefaultOffer(offerData) {
    setSelectedOffer(offerData);
    return selectedOffer;
  }

  function countOffers(offersData) {
    const offers = offersData.length;
    if (offers === 1) {
      return `${offers} Angebot`;
    } else {
      return `${offers} Angebote`;
    }
  }
}
