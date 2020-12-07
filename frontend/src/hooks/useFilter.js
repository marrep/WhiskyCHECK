import { useEffect, useState } from "react";
import useProducts from "./useProducts";
import getProductData from "../services/getProductData";

export default function useFilter() {
  const [filterOverlay, setFilterOverlay] = useState(false);
  const [originFilter, setOriginFilter] = useState([]);
  const { products, setProducts } = useProducts();
  const [searchResults, setSearchResults] = useState(products);

  useEffect(() => {
    let tags = products.map((elem) => {
      return elem.origin;
    });
    let filteredTags = [];
    tags.forEach((elem) => {
      if (!filteredTags.includes(elem)) {
        filteredTags.push(elem);
      }
    });
    setOriginFilter(filteredTags);
    console.log(filteredTags);
  }, [filterOverlay]);

  useEffect(() => {
    setSearchResults(products);
  }, [products]);

  return {
    originFilter,
    toggleFilterOverlay,
    filterHandler,
    filterOverlay,
    searchResults,
    sortProducts,
  };

  function toggleFilterOverlay() {
    setFilterOverlay(!filterOverlay);
  }

  function filterHandler(tagTitle) {
    searchResults.some((elem) => elem.origin !== tagTitle)
      ? setSearchResults(products.filter((elem) => elem.origin === tagTitle))
      : setSearchResults(products);
  }

  function sortProducts(sortSelector, searchResults) {
    if (sortSelector === "NameUp") {
      setSearchResults(
        Object.assign(
          [],
          searchResults.sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
          })
        )
      );
    }
    if (sortSelector === "NameDown") {
      setSearchResults(
        Object.assign(
          [],
          searchResults.sort((a, b) => {
            if (a.title > b.title) return -1;
            if (a.title < b.title) return 1;
            return 0;
          })
        )
      );
    }
  }
}
