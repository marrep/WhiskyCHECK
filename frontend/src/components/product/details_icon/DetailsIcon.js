import Details from "../../../assets/details.svg";
import { Link } from "react-router-dom";
import {
  DetailsIconWrapper,
  DetailsIconImage,
  DetailsIconText,
} from "./DetailsIconStyled";

export default function DetailsIcon({ index }) {
  return (
    <DetailsIconWrapper>
      <Link to={`/products/${index}`} style={{ textDecoration: "none" }}>
        <DetailsIconImage src={Details} alt="" />
      </Link>
      <DetailsIconText>Details</DetailsIconText>
    </DetailsIconWrapper>
  );
}
