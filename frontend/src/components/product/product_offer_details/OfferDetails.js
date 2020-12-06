import React from "react";
import { useState } from "react";
import OfferDetailsItem from "../product_offer_details_item/OfferDetailsItem";
import selectOffer from "../../../services/selectOffer";
import AddToCartButton from "../../buttons/AddToCartButton";
import {
  OfferDetailsWrapper,
  OfferDetailsShowButton,
  OfferDetailsSelectButton,
} from "./OfferDetailsStyled";

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
    <OfferDetailsWrapper>
      <OfferDetailsItem singleOffer={selectedOffer} />
      <div style={{ display: offerDetails.length === 1 ? "none" : "block" }}>
        <OfferDetailsShowButton onClick={() => setToggleOffer(!toggleOffers)}>
          Alle {offerDetails.length} Angebote Anzeigen
        </OfferDetailsShowButton>
        <div style={{ display: toggleOffers ? "block" : "none" }}>
          {offerDetails.map((offer, index) => (
            <div>
              <OfferDetailsItem singleOffer={offer} index={index} />
              <OfferDetailsSelectButton
                onClick={() =>
                  selectOffer(offer.id, offerDetails, setSelectedOffer)
                }
              >
                Dieses Angebot auswählen
              </OfferDetailsSelectButton>
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
    </OfferDetailsWrapper>
  );
}
