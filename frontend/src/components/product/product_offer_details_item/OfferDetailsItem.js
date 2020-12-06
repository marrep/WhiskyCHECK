import React from "react";
import getDeliverDay from "../../../services/getDeliveryDay";
import {
  OfferDetailsItemStock,
  OfferDetailsItemSeller,
  OfferDetailsItemPrice,
  OfferDetailsItemDelivery,
} from "./OfferDetailsItemStyled";

export default function OfferDetailsItem({ singleOffer }) {
  console.log(singleOffer);

  return (
    <div>
      <OfferDetailsItemPrice>
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(singleOffer.price)}
      </OfferDetailsItemPrice>
      <OfferDetailsItemStock>
        {singleOffer.onStock ? "Auf Lager." : "Nicht verfügbar"}
      </OfferDetailsItemStock>
      <OfferDetailsItemSeller>
        Versand durch {singleOffer.seller}
      </OfferDetailsItemSeller>
      <OfferDetailsItemDelivery>
        {getDeliverDay(singleOffer.deliveryTime)}
      </OfferDetailsItemDelivery>
    </div>
  );
}
