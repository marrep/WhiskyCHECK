import { useState } from "react";
import OfferDetailsItem from "./OfferDetailsItem";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import useOffers from "../../hooks/useOffers";

OfferDetails.propTypes = {
  addToCart: PropTypes.func.isRequired,
  offers: PropTypes.array,
  product: PropTypes.object.isRequired,
};

export default function OfferDetails({ product, offers, addToCart }) {
  const [toggleOffers, setToggleOffer] = useState(false);
  const { selectedOffer, selectNewOffer } = useOffers();

  return (
    <MainWrapper>
      <OfferDetailsItem
        offer={
          selectedOffer.length === 0 || offers[0].gtin !== selectedOffer.gtin
            ? offers[0]
            : selectedOffer
        }
      />
      <div style={{ display: offers.length === 1 ? "none" : "block" }}>
        <ShowOffers onClick={() => setToggleOffer(!toggleOffers)}>
          Alle {offers.length} Angebote Anzeigen
        </ShowOffers>
        <div style={{ display: toggleOffers ? "block" : "none" }}>
          {offers.map((offer) => (
            <div>
              <OfferDetailsItem offer={offer} />
              <SelectOffer onClick={() => selectNewOffer(offer.id, offers)}>
                Dieses Angebot auswählen
              </SelectOffer>
            </div>
          ))}
        </div>
      </div>
      <AddToCart
        onClick={() =>
          addToCart(
            product,
            selectedOffer.length === 0 ? offers[0] : selectedOffer
          )
        }
      >
        In den Warenkorb
      </AddToCart>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  font-family: Lato;
  width: 100%;
`;

const ShowOffers = styled.div`
  border-bottom: 1px solid #dadbdc;
  border-top: 1px solid #dadbdc;
  border: none;
  color: #134085;
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px;
  text-align: center;
`;

const SelectOffer = styled.div`
  border-bottom: 1px solid #dadbdc;
  border-top: 1px solid #dadbdc;
  border: none;
  color: #575757;
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px;
  text-align: center;
`;

const AddToCart = styled.button`
  background-color: #003f8a;
  border-radius: 30px;
  border: none;
  color: #ffffff;
  display: block;
  margin-bottom: 40px;
  margin-left: 0;
  margin-right: 0;
  margin-top: 30px;
  padding: 1em 5em;
  text-transform: uppercase;
  width: 100%;
`;
