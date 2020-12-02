import React from "react";
import { useState } from "react";
import OfferDetailsItem from "../product_offer_details_item/OfferDetailsItem";
import setCurrentOffer from "../../../services/setCurrentOffer";

export default function OfferDetails({ offerDetails }) {
  const [selectedOffer, setSelectedOffer] = useState(offerDetails[0]);
  const [toggleOffers, setToggleOffer] = useState(false);

  return (
    <div>
      <OfferDetailsItem singleOffer={selectedOffer} />
      <div style={{ display: offerDetails.length === 1 ? "none" : "block" }}>
        <button onClick={() => setToggleOffer(!toggleOffers)}>
          Alle {offerDetails.length} Angebote Anzeigen
        </button>
        <div style={{ display: toggleOffers ? "block" : "none" }}>
          {offerDetails.map((offer, index) => (
            <div>
              <OfferDetailsItem singleOffer={offer} index={index} />
              <button
                onClick={() =>
                  setCurrentOffer(
                    offer.id,
                    selectedOffer,
                    offerDetails,
                    setSelectedOffer
                  )
                }
              >
                auswählen
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
