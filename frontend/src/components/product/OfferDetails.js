import React from "react";
import OfferDetailsItem from "./OfferDetailsItem";
import styled from "styled-components";

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
        <DetailsShowButton onClick={() => setToggleOffer(!toggleOffers)}>
          Alle {offers.length} Angebote Anzeigen
        </DetailsShowButton>
        <div style={{ display: toggleOffers ? "block" : "none" }}>
          {offers.map((offer) => (
            <div>
              <OfferDetailsItem offer={offer} />
              <DetailsSelectButton
                onClick={() => selectNewOffer(offer.id, offers)}
              >
                Dieses Angebot auswählen
              </DetailsSelectButton>
            </div>
          ))}
        </div>
      </div>
      <AddToCartButtonStyled
        onClick={() =>
          addToCart(
            product,
            selectedOffer.length === 0 ? offers[0] : selectedOffer
          )
        }
      >
        In den Warenkorb
      </AddToCartButtonStyled>
    </OfferDetailsWrapper>
  );
}

export const OfferDetailsWrapper = styled.div`
  font-family: Lato;
  width: 100%;
`;

export const DetailsShowButton = styled.div`
  display: block;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #134085;
  border: none;
  text-align: center;
  border-top: 1px solid #dadbdc;
  border-bottom: 1px solid #dadbdc;
`;

export const DetailsSelectButton = styled.div`
  display: block;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #575757;
  border: none;
  text-align: center;
  border-top: 1px solid #dadbdc;
  border-bottom: 1px solid #dadbdc;
`;

export const AddToCartButtonStyled = styled.button`
  display: block;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 40px;
  width: 100%;
  padding: 1em 5em;
  text-transform: uppercase;
  background-color: #003f8a;
  border-radius: 30px;
  border: none;
  color: #ffffff;
`;
