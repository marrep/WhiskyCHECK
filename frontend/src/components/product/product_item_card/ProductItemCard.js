// import React from "react";
// import {
//   ItemTitle,
//   ItemPriceRange,
//   ItemOffers,
//   ItemImage,
//   ItemWrapper,
// } from "./ProductItemCardStyled";
// import { Link } from "react-router-dom";
// import countOffers from "../../../services/countOffers";
// import getPriceRange from "../../../services/getPriceRange";
// import getDeliveryDay from "../../../services/getDeliveryDay";

// export default function ProductItemCard({ title, image, offers, index }) {
//   return (
//     <ItemWrapper>
//       <Link to={`/products/${index}`} style={{ textDecoration: "none" }}>
//         <ItemImage src={image} alt="" />
//         <ItemTitle>{title}</ItemTitle>
//         <ItemOffers>{countOffers(offers)}</ItemOffers>
//         <ItemPriceRange>{getPriceRange(offers)}</ItemPriceRange>
//         <p>{getDeliveryDay(offers)}</p>
//       </Link>
//     </ItemWrapper>
//   );
// }
