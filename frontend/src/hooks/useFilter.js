import { useEffect, useState } from "react";
import useProducts from "./useProducts";

export default function useFilter() {
  const { products, setProducts } = useProducts();
  const [toggleFilter, setToggleFilter] = useState(false);
  const [originFilter, setOriginFilter] = useState([]);
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
  }, [toggleFilter]);

  useEffect(() => {
    setSearchResults(products);
  }, [products]);

  return {
    originFilter,
    showHideFilter,
    filterHandler,
    toggleFilter,
    searchResults,
    sortProducts,
  };

  function showHideFilter() {
    setToggleFilter(!toggleFilter);
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
