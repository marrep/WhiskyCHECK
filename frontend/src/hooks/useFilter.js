import { useEffect, useState } from "react";
import useProducts from "./useProducts";
import getProductData from "../services/getProductData";

export default function useFilter() {
  const [filterOverlay, setFilterOverlay] = useState(false);
  const [originFilter, setOriginFilter] = useState([]);
  const { products, setProducts } = useProducts();

  useEffect(() => {
    let newFilter = [].concat.apply(
      [],
      originFilter.map((elem) =>
        products.filter((item) => elem === item.origin)
      )
    );

    originFilter.length === 0 ? setProducts(products) : setProducts(newFilter);
  }, [originFilter]);

  const arrayData = [];
  products.forEach((element) => {
    if (!arrayData.includes(element.origin)) {
      arrayData.push(element.origin);
    }
  });

  function toggleFilterOverlay() {
    setFilterOverlay(!filterOverlay);
  }

  function filterHandler(tagTitle) {
    originFilter.includes(tagTitle)
      ? removeFilter(tagTitle, originFilter, setOriginFilter)
      : addFilter(tagTitle, originFilter, setOriginFilter);

    function removeFilter(tagTitle) {
      const index = originFilter.findIndex((elem) => elem === tagTitle);
      setOriginFilter([
        ...originFilter.slice(0, index),
        ...originFilter.slice(index + 1),
      ]);
    }

    function addFilter(tagTitle) {
      setOriginFilter([...originFilter, tagTitle]);
    }
  }

  return {
    originFilter,
    toggleFilterOverlay,
    filterHandler,
    filterOverlay,
  };
}
