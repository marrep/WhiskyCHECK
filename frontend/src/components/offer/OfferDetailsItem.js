import { convertToEuro, getDeliveryDay } from "../../services/services";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

OfferDetailsItem.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default function OfferDetailsItem({ offer }) {
  return (
    <>
      <Price>{convertToEuro(offer.price)}</Price>
      <Stock>{offer.onStock ? "Auf Lager." : "Nicht verfügbar"}</Stock>
      <Seller>Versand durch {offer.seller}</Seller>
      <Delivery>{getDeliveryDay(offer.deliveryTime)}</Delivery>
    </>
  );
}

const Delivery = styled.span`
  color: #575757;
  display: block;
  font-family: Lato;
  font-size: 12px;
  font-weight: 800;
  text-decoration: none;
`;

const Price = styled.span`
  color: #e43122;
  display: block;
  font-size: 18px;
  text-decoration: none;
`;

const Stock = styled.span`
  color: #0da500;
  display: block;
  font-size: 12px;
  text-decoration: none;
`;

const Seller = styled.span`
  color: #575757;
  display: block;
  font-size: 12px;
  text-decoration: none;
`;
