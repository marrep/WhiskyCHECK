import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  width: 100%;
  overflow: hidden;
  text-decoration: none;
  border-bottom: 1px solid #dadbdc;
`;

export const ItemWrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: top;
  width: 30%;
  overflow: hidden;
  text-decoration: none;
`;

export const ItemWrapperCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 1em;
  width: 50%;
  overflow: hidden;
  text-decoration: none;
`;

export const ItemWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: top;
  width: 20%;
  overflow: hidden;
  text-decoration: none;
`;

export const ItemImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  text-decoration: none;
  text-align: center;
`;

export const ItemTitle = styled.h2`
  display: block;
  font-size: 12px;
  color: #003f8a;
  text-decoration: none;
`;

export const ItemPriceRange = styled.p`
  display: block;
  font-size: 15px;
  color: #e43122;
  text-decoration: none;
`;

export const ItemOffers = styled.p`
  display: block;
  font-size: 12px;
  color: #575757;
  text-decoration: none;
`;

export const ItemOnStock = styled.p`
  display: block;
  font-size: 12px;
  color: #0da500;
  text-decoration: none;
`;
