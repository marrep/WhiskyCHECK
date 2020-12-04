import React from "react";
import getDeliverDay from "../../../services/getDeliveryDay";

export default function OfferDetailsItem({ singleOffer }) {
  console.log(singleOffer);

  return (
    <div>
      <div>{singleOffer.price}</div>
      <div>{singleOffer.seller}</div>
      <div>{singleOffer.onStock ? "Auf Lager." : "Nicht verfügbar"}</div>
      <div>{getDeliverDay(singleOffer.deliveryTime)}</div>
    </div>
  );
}
