import React from "react";
import styled from "styled-components";
import { getDeliveryDay, convertToEuro } from "../../services/helpers";

export default function OfferDetailsItem({ offer }) {
  return (
    <div>
      <OfferDetailsItemPrice>
        {convertToEuro(offer.price)}
      </OfferDetailsItemPrice>
      <OfferDetailsItemStock>
        {offer.onStock ? "Auf Lager." : "Nicht verfügbar"}
      </OfferDetailsItemStock>
      <OfferDetailsItemSeller>
        Versand durch {offer.seller}
      </OfferDetailsItemSeller>
      <OfferDetailsItemDelivery>
        {getDeliveryDay(offer.deliveryTime)}
      </OfferDetailsItemDelivery>
    </div>
  );
}

export const OfferDetailsItemDelivery = styled.span`
  text-decoration: none;
  font-weight: 800;
  font-size: 12px;
  font-family: Lato;
  display: block;
  color: #575757;
`;

export const OfferDetailsItemPrice = styled.span`
  text-decoration: none;
  font-size: 18px;
  display: block;
  color: #e43122;
`;

export const OfferDetailsItemStock = styled.span`
  text-decoration: none;
  font-size: 12px;
  display: block;
  color: #0da500;
`;

export const OfferDetailsItemSeller = styled.span`
  text-decoration: none;
  font-size: 12px;
  display: block;
  color: #575757;
`;
