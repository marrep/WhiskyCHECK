import React from "react";
import styled from "styled-components";
import { getCartImage, convertToEuro } from "../../services/services";
import { CartTotalPrice } from "../../components/components";
import { useHistory } from "react-router-dom";
import edit from "../../assets/icons/edit.svg";

export default function Summary({ cart, products, handleSubmit, orderData }) {
  const history = useHistory();

  return (
    <>
      <MainWrapper>
        <TopWrapper>
          <span>Meine Bestellung</span>
        </TopWrapper>

        {cart.items.map((cartItem) => (
          <>
            <CartWrapper>
              <RightWrapper>{cartItem.amount} x</RightWrapper>
              <LeftWrapper>
                <img src={getCartImage(products, cartItem.id)} alt="" />
              </LeftWrapper>
              <CenterWrapper>
                <Price>{convertToEuro(cartItem.price)}</Price>
                <Title>{cartItem.title}</Title>
                <Seller>Versand durch {cartItem.seller}</Seller>
              </CenterWrapper>
            </CartWrapper>
          </>
        ))}

        <CartTotalPrice cart={cart} />

        <ConfirmWrapper>
          <ContactWrapper>
            <span>{orderData.name}</span>
            <span>{orderData.surname}</span>
            <span>
              {orderData.street} {orderData.number}
            </span>
            <span>
              {orderData.zip} {orderData.city}
            </span>
            <span>{orderData.country}</span>
          </ContactWrapper>
          <EditWrapper>
            <img src={edit} alt="" onClick={() => history.push("/checkout")} />
          </EditWrapper>
          <ContactWrapper>
            <strong>Bezahlmethode:</strong>
            <span>{orderData.paymentMethod}</span>
            <strong>Emailadresse:</strong>
            <span>{orderData.email}</span>
          </ContactWrapper>
          <EditWrapper>
            <img src={edit} alt="" onClick={() => history.push("/checkout")} />
          </EditWrapper>
        </ConfirmWrapper>

        <ButtonWrapper>
          <CheckoutButton
            data-testid="submitButton"
            onClick={(event) => handleSubmit(event, orderData, history)}
          >
            Jetzt bestellen
          </CheckoutButton>
        </ButtonWrapper>
      </MainWrapper>
    </>
  );
}

const ButtonWrapper = styled.div`
  display: block;
  text-align: center;
  width: 100%;
`;

const CheckoutButton = styled.button`
  background-color: #f6ba41;
  border-radius: 30px;
  border: none;
  color: #ffffff;
  display: block;
  margin: 3em auto;
  padding: 1em 2.5em;
  text-transform: uppercase;
  width: 80%;
`;

const MainWrapper = styled.div`
  text-align: center;

  p {
    font-family: Lato;
    padding-top: 50px;
  }
`;

const TopWrapper = styled.div`
  border-bottom: 1px solid #dadbdc;
  display: block;
  padding: 10px;
  width: 100%;

  span {
    font-family: Lato;
    font-size: 15px;
    color: #003f8a;
    margin-left: 5px;
  }

  a {
    text-decoration: none;
  }
`;

const CartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Lato;
  overflow: hidden;
  text-decoration: none;
  width: 100%;
`;

const LeftWrapper = styled.div`
  align-items: top;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 10px;
  text-decoration: none;
  width: 25%;

  img {
    display: block;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    max-height: 100px;
    max-width: 100%;
    overflow: hidden;
    width: auto;
  }
`;

const CenterWrapper = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 55%;
`;

const RightWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
`;

const Price = styled.span`
  color: #e43122;
  display: block;
  font-size: 18px;
  text-align: left;
`;

const Seller = styled.span`
  color: #575757;
  display: block;
  font-size: 12px;
  text-align: left;
`;

const Title = styled.span`
  text-align: left;
  display: block;
  font-size: 14px;
  color: #134085;
`;

const ConfirmWrapper = styled.div`
  font-family: Lato;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
  width: 100%;
  padding: 0 1em 0 1em;
`;

const ContactWrapper = styled.div`
  display: flex;
  font-size: 16px;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  width: 40%;
`;

const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  width: 3%;
`;
