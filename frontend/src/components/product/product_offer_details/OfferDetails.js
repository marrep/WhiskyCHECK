import React from "react";
import { useState } from "react";
import OfferDetailsItem from "../product_offer_details_item/OfferDetailsItem";
import selectOffer from "../../../services/selectOffer";
import AddToCartButton from "../../buttons/AddToCartButton";

export default function OfferDetails({
  offerDetails,
  product,
  cart,
  setCart,
  AddItem,
}) {
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
                  selectOffer(offer.id, offerDetails, setSelectedOffer)
                }
              >
                auswählen
              </button>
            </div>
          ))}
        </div>
      </div>
      <AddToCartButton
        AddItem={AddItem}
        product={product}
        cart={cart}
        setCart={setCart}
        selectedOffer={selectedOffer}
      />
    </div>
  );
}
