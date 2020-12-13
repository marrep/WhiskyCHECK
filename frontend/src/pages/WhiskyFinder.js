import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import SearchProductItem from "../components/search/SearchProductItem";

const FILTER_TAG = "Japan";

export default function WhiskyFinder({
  setWhiskyFinder,
  filterOriginByTag,
  bookmarks,
  toggleBookmark,
}) {
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
          <SearchProductItem
            title={title}
            image={image}
            offers={offers}
            id={id}
            bookmarks={bookmarks}
            toggleBookmark={toggleBookmark}
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
  font-family: Lato;
  flex-wrap: wrap;
  display: flex;
  background-color: white;

  a {
    text-decoration: none;
  }
`;

const MainWrapper = styled.div`
  font-family: Lato;
  flex-wrap: wrap;
  display: flex;
  background-color: white;

  h2 {
    font-size: 17px;
    font-weight: 400;
    margin-left: 15px;
  }

  form {
    background-color: #f1f1f1;
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
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }

  input[type="radio"] {
    visibility: hidden;
    position: absolute;
  }
`;
