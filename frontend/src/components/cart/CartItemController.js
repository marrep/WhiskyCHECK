import plus from "../../assets/icons/plus.svg";
import React from "react";
import styled from "styled-components";
import trashbin from "../../assets/icons/trashbin.svg";
import PropTypes from "prop-types";

export default function CartItemController({
  cartItem,
  increaseAmount,
  removeFromCart,
}) {
  CartItemController.propTypes = {
    cartItem: PropTypes.object,
    cart: PropTypes.array,
  };

  return (
    <MainWrapper>
      <Controller>
        <LeftWrapper onClick={() => removeFromCart(cartItem)}>
          <div>
            <img src={trashbin} alt="" />
          </div>
        </LeftWrapper>
        <CenterWrapper>{cartItem.amount}</CenterWrapper>
        <RightWrapper onClick={() => increaseAmount(cartItem)}>
          <img src={plus} alt="" />
        </RightWrapper>
      </Controller>
      {/* {JSON.stringify(cart)} */}
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: block;
  font-family: Lato;
  padding: 10px 25px;
  width: 100%;
`;

const Controller = styled.div`
  align-items: center;
  border-radius: 5px;
  border: 2px solid #575757;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 20%;
`;

const LeftWrapper = styled.div`
  align-items: center;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  width: 30%;
`;

const CenterWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 40%;
`;

const RightWrapper = styled.div`
  align-items: center;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  width: 30%;
`;
