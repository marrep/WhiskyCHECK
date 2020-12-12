import convertToEuro from "../../services/convertToEuro";
import styled from "styled-components";
import PropTypes from "prop-types";

CartTotalPrice.propTypes = {
  cart: PropTypes.array,
};

export default function CartTotalPrice({ cart }) {
  return (
    <>
      <MainWrapper
        style={{ display: cart.items.length === 0 ? "none" : "flex" }}
      >
        <LeftWrapper>
          <span>Zwischensumme:</span>
          <span>Versand:</span>
          <span>Summe:</span>
        </LeftWrapper>
        <RightWrapper>
          <span>{convertToEuro(cart.totalPrice)}</span>
          <span>{convertToEuro(cart.totalShipping)}</span>
          <span>{convertToEuro(cart.totalPrice + cart.totalShipping)}</span>
        </RightWrapper>
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.div`
  align-items: center;
  color: #4a4a4a;
  flex-direction: row;
  font-family: Lato;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  padding: 10px;
  text-align: right;
  width: 60%;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: Left;
  padding: 10px;
  text-align: left;
  width: 40%;
`;
