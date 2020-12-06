import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 100%;
  text-decoration: none;
  padding: 1em;
  overflow: hidden;
  flex-direction: row;
  display: flex;
  border-bottom: 1px solid #dadbdc;
`;

export const ItemWrapperLeft = styled.div`
  width: 30%;
  text-decoration: none;
  overflow: hidden;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: top;
`;

export const ItemWrapperCenter = styled.div`
  width: 50%;
  text-decoration: none;
  padding: 1em;
  overflow: hidden;
  justify-content: left;
  flex-direction: column;
  display: flex;
  align-items: left;
`;

export const ItemWrapperRight = styled.div`
  width: 20%;
  text-decoration: none;
  overflow: hidden;
  justify-content: space-around;
  flex-direction: column;
  display: flex;
  align-items: stretch;
`;

export const ItemImage = styled.img`
  width: auto;
  overflow: hidden;
  max-width: 100%;
  max-height: 100px;
  margin-right: auto;
  margin-left: auto;
  height: auto;
  display: block;
`;

export const ItemTitle = styled.span`
  text-decoration: none;
  font-weight: 800;
  font-size: 14px;
  font-family: Lato;
  display: block;
  color: #003f8a;
`;

export const ItemPriceRange = styled.span`
  text-decoration: none;
  font-size: 16px;
  display: block;
  color: #e43122;
`;

export const ItemOffers = styled.span`
  text-decoration: none;
  font-weight: 200;
  font-size: 14px;
  display: block;
  color: #575757;
`;

export const ItemOnStock = styled.span`
  text-decoration: none;
  font-size: 12px;
  display: block;
  color: #0da500;
`;

export const ItemDelivery = styled.span`
  text-decoration: none;
  font-size: 14px;
  display: block;
  color: #575757;
`;
