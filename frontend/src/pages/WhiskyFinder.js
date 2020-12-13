import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import HomeProductItem from "../components/home/HomeProductItem";

const FILTER_TAG = "Japan";

export default function WhiskyFinder({ setWhiskyFinder, filterOriginByTag }) {
  const history = useHistory();

  return (
    <MainWrapper>
      <TopWrapper>
        <span>Whiskyfinder</span>
      </TopWrapper>
      <form>
        <h2>Welche Musik hörst Du am liebsten?</h2>
        <fieldset>
          <input
            name="genre"
            type="radio"
            value="rock"
            id="rock"
            onChange={handleSelection}
          />
          <label for="rock">Rock</label>
        </fieldset>
        <fieldset>
          <input
            name="genre"
            type="radio"
            value="jazz"
            id="jazz"
            onChange={handleSelection}
          />
          <label for="jazz">Jazz</label>
        </fieldset>
        <fieldset>
          <input
            name="genre"
            type="radio"
            value="pop"
            id="pop"
            onChange={handleSelection}
          />
          <label for="pop">Pop</label>
        </fieldset>
      </form>

      <h2>{`Raritäten aus ${FILTER_TAG}`}</h2>
      <BottomWrapper>
        {filterOriginByTag(FILTER_TAG).map(({ title, image, offers, id }) => (
          <HomeProductItem
            title={title}
            image={image}
            offers={offers}
            id={id}
          />
        ))}
      </BottomWrapper>
    </MainWrapper>
  );

  function handleSelection(event) {
    setWhiskyFinder(event.target.value);
    setTimeout(history.push("/search"), 2000);
  }
}

const TopWrapper = styled.div`
  display: block;
  padding: 10px;
  width: 100%;
  text-align: center;

  span {
    font-family: Lato;
    font-size: 15px;
    color: #003f8a;
    margin-left: 5px;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 30vh;
  overflow-x: auto;
  padding: 10px 5px;
  white-space: nowrap;
  width: auto;
`;

const MainWrapper = styled.div`
  font-family: Lato;
  flex-wrap: wrap;
  display: flex;
  background-color: white;

  h2 {
    font-size: 15px;
    font-weight: 400;
    margin-left: 5px;
  }

  form {
    background-color: #ffb900;
    width: 100%;
    margin: auto auto 1em auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
  }

  fieldset {
    padding: 0.2em;
    border: none;
    width: 80%;
    position: relative;
    display: flex;
  }

  label {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    background: #ffffff;
    text-align: center;
    padding: 1em;
    cursor: pointer;
    width: 100%;
    border-radius: 2rem;
    position: relative;
    z-index: 1;
  }

  label:hover {
    background: #d8d8d8;
  }

  input[type="radio"] {
    visibility: hidden;
    position: absolute;
  }

  input[type="radio"]:checked {
    ~ label {
      background: #003677;
      color: white;
      transform: scale(1.05);
      animation: checked 400ms 1;
      position: relative;
      z-index: 5;
    }
  }
`;
