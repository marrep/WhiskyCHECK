import { useState } from "react";

export default function useOffers() {
  const [selectedOffer, setSelectedOffer] = useState([]);
  const [toggleOffers, setToggleOffer] = useState(false);

  function selectDefaultOffer(productOfferDetails) {
    setSelectedOffer(productOfferDetails);
    return selectedOffer;
  }

  function selectNewOffer(id, offerDetails) {
    const findOffer = offerDetails.find((element) => element.id === id);
    setSelectedOffer(findOffer);
  }

  function checkAvailability(selectedOffer) {
    if (selectedOffer.onStock) {
      return true;
    } else {
      return false;
    }
  }

  return {
    selectedOffer,
    selectDefaultOffer,
    selectNewOffer,
    toggleOffers,
    setToggleOffer,
    checkAvailability,
  };
}
