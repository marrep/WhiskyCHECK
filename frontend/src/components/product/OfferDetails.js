import React from "react";
import OfferDetailsItem from "./OfferDetailsItem";
import AddToCartButton from "../buttons/AddToCartButton";
import styled from "styled-components";
import OfferDetailsSelectButton from "../buttons/OfferDetailsSelectButton";
import OfferDetailsShowButton from "../buttons/OfferDetailsShowButton";

export default function OfferDetails({
  product,
  offers,
  toggleOffers,
  setToggleOffer,
  selectNewOffer,
  addToCart,
  selectedOffer,
}) {
  return (
    <OfferDetailsWrapper>
      <OfferDetailsItem
        offer={
          selectedOffer.length === 0 || offers[0].gtin !== selectedOffer.gtin
            ? offers[0]
            : selectedOffer
        }
      />
      <div style={{ display: offers.length === 1 ? "none" : "block" }}>
        <OfferDetailsShowButton
          offers={offers}
          setToggleOffer={setToggleOffer}
          toggleOffers={toggleOffers}
        />
        <div style={{ display: toggleOffers ? "block" : "none" }}>
          {offers.map((offer) => (
            <div>
              <OfferDetailsItem offer={offer} />
              <OfferDetailsSelectButton
                offers={offers}
                id={offer.id}
                selectNewOffer={selectNewOffer}
              />
            </div>
          ))}
        </div>
      </div>
      <AddToCartButton
        product={product}
        selectedOffer={selectedOffer.length === 0 ? offers[0] : selectedOffer}
        addToCart={addToCart}
      />
    </OfferDetailsWrapper>
  );
}

export const OfferDetailsWrapper = styled.div`
  font-family: Lato;
  width: 100%;
`;
