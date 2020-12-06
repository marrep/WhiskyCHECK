import React from "react";
import OfferDetailsItem from "./OfferDetailsItem";
import AddToCartButton from "../buttons/AddToCartButton";
import styled from "styled-components";
import OfferDetailsSelectButton from "../buttons/OfferDetailsSelectButton";
import OfferDetailsShowButton from "../buttons/OfferDetailsShowButton";

export default function OfferDetails({
  selectedOffer,
  product,
  offers,
  selectDefaultOffer,
  toggleOffers,
}) {
  console.log(selectedOffer);
  console.log(offers[0]);
  console.log(product);
  console.log(selectDefaultOffer);

  return (
    <OfferDetailsWrapper>
      <OfferDetailsItem offer={selectDefaultOffer(offers[0])} />
      <div style={{ display: offers.length === 1 ? "none" : "block" }}>
        <OfferDetailsShowButton offers={offers} />
        <div style={{ display: toggleOffers ? "block" : "none" }}>
          {offers.map((offer, index) => (
            <div>
              <OfferDetailsItem offer={offer} index={index} />
              <OfferDetailsSelectButton offers={offers} id={offer.id} />
            </div>
          ))}
        </div>
      </div>
      <AddToCartButton product={product} selectedOffer={selectedOffer} />
    </OfferDetailsWrapper>
  );
}

export const OfferDetailsWrapper = styled.div`
  font-family: Lato;
  width: 100%;
`;
