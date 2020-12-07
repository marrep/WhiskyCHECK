import { useState } from "react";

export default function useOffers() {
  const [selectedOffer, setSelectedOffer] = useState([]);
  const [toggleOffers, setToggleOffer] = useState(false);

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

  return {
    selectedOffer,
    toggleOffers,
    selectNewOffer,
    setToggleOffer,
    checkAvailability,
    setSelectedOffer,
    selectDefaultOffer,
  };
}
