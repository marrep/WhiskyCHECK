import React from "react";
import styled from "styled-components";

export default function OfferDetailsSelectButton({
  offers,
  id,
  selectNewOffer,
}) {
  console.log(offers);
  console.log(id);
  console.log(selectNewOffer);

  return (
    <>
      <DetailsSelectButton onClick={() => selectNewOffer(id, offers)}>
        Dieses Angebot auswählen
      </DetailsSelectButton>
    </>
  );
}

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
