import React from "react";
import styled from "styled-components";
import close from "../../assets/icons/close.svg";
import { Link } from "react-router-dom";

export default function BookmarkItem({ image, deleteBookmark, id }) {
  return (
    <BookmarkItemWrapper>
      <BookmarkItemWrapperLeft>
        <img src={image} alt="" />
      </BookmarkItemWrapperLeft>
      <BookmarkItemWrapperCenter>
        <StyledLink to={`/products/${id}`}>
          <BookmarkBuyButtonStyled>Jetzt kaufen</BookmarkBuyButtonStyled>
        </StyledLink>
      </BookmarkItemWrapperCenter>
      <BookmarkItemWrapperRight>
        <img src={close} alt="" onClick={() => deleteBookmark(id)} />
      </BookmarkItemWrapperRight>
    </BookmarkItemWrapper>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const BookmarkItemWrapper = styled.div`
  width: 100%;
  text-decoration: none;
  overflow: hidden;
  flex-direction: row;
  display: flex;
  border-bottom: 1px solid #dadbdc;
`;

const BookmarkItemWrapperLeft = styled.div`
  width: 30%;
  padding: 10px;
  text-decoration: none;
  overflow: hidden;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: top;

  img {
    width: auto;
    overflow: hidden;
    max-width: 100%;
    max-height: 100px;
    margin-right: auto;
    margin-left: auto;
    height: auto;
    display: block;
  }
`;

const BookmarkItemWrapperCenter = styled.div`
  width: 50%;
  text-decoration: none;
  overflow: hidden;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

const BookmarkItemWrapperRight = styled.div`
  width: 20%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

const BookmarkBuyButtonStyled = styled.button`
  display: block;
  margin-left: 0;
  margin-right: 0;
  width: 80%;
  padding: 0.5em 2.5em;
  text-transform: uppercase;
  background-color: #f6ba41;
  border-radius: 30px;
  border: none;
  color: #ffffff;
`;
