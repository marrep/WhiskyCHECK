import React from "react";
import styled from "styled-components";

export default function FilterTags({ filterHandler, originFilter }) {
  console.log(originFilter);

  return (
    <FilterTagsStyled>
      <form>
        <h2>Herkunft</h2>
        {originFilter.map((element, index) => (
          <label
            htmlFor={element[index]}
            onClick={(event) => filterHandler(event.target.value)}
          >
            {element}
            <input
              type="checkbox"
              name="origin"
              value={element}
              id={element[index]}
            />
          </label>
        ))}
      </form>
    </FilterTagsStyled>
  );
}

export const FilterTagsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100px;

  span {
    padding: 0.5em 1em;
    margin: 0.25em 0.5em;
    border-radius: 1em;
    background-color: #ffffff;
  }

  label {
    display: inline-block;
    margin: -2px;
    padding: 4px 12px;
    background-color: #e7e7e7;
    border: 1px solid black;
  }
`;
