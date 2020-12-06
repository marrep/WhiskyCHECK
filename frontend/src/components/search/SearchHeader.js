import React from "react";
import styled from "styled-components";

export default function SearchHeader({ products }) {
  return (
    <SearchHeaderWrapper>
      Whisky |{" "}
      {`${products.length} ${
        products.length === 1 ? "Ergebnis" : "Ergebnisse"
      }`}{" "}
    </SearchHeaderWrapper>
  );
}

export const SearchHeaderWrapper = styled.div`
  font-family: Lato;
  font-size: 20px;
  margin-left: 5px;
  font-weight: 400;
`;
