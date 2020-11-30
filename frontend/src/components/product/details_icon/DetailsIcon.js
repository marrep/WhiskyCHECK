import Details from "../../../assets/details.svg";
import { Link } from "react-router-dom";

export default function DetailsIcon({ index }) {
  return (
    <div>
      <Link to={`/products/${index}`} style={{ textDecoration: "none" }}>
        <img src={Details} alt="" />
      </Link>
      <p>Details</p>
    </div>
  );
}
