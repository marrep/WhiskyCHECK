import { useState } from "react";

export default function useOffers() {
  const [selectedOffer, setSelectedOffer] = useState([]);
  const [toggleOffers, setToggleOffer] = useState(false);

  return {
    selectedOffer,
    selectNewOffer,
    checkAvailability,
    setSelectedOffer,
    toggleOffers,
    setToggleOffer,
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
    setToggleOffer(!toggleOffers);
    return newOffer;
  }
}
