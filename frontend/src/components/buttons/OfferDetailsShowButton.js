import React from "react";
import styled from "styled-components";
import useOffers from "../../hooks/useOffers";

export default function OfferDetailsSelectButton({ offers }) {
  const { setToggleOffer, toggleOffers } = useOffers();

  return (
    <>
      <DetailsShowButton onClick={() => setToggleOffer(!toggleOffers)}>
        Alle {offers.length} Angebote Anzeigen
      </DetailsShowButton>
    </>
  );
}

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
