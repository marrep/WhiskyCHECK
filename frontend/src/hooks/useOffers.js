import { useState } from "react";

export default function useOffers() {
  const [selectedOffer, setSelectedOffer] = useState([]);
  const [toggleOffers, setToggleOffer] = useState(false);

  console.log(selectedOffer);

  function selectDefaultOffer(productOfferDetails) {
    setSelectedOffer(productOfferDetails);
    return selectedOffer;
  }

  function checkAvailability(selectedOffer) {
    if (selectedOffer.onStock) {
      return true;
    } else {
      return false;
    }
  }

  function selectNewOffer(id, offerDetails) {
    const newOffer = offerDetails.find((element) => element.id === id);
    return newOffer;
  }

  return {
    selectedOffer,
    selectDefaultOffer,
    toggleOffers,
    selectNewOffer,
    setToggleOffer,
    checkAvailability,
    setSelectedOffer,
  };
}
