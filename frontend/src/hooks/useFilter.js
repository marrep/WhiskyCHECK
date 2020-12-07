import { useEffect, useState } from "react";
import useProducts from "./useProducts";
import getProductData from "../services/getProductData";

export default function useFilter() {
  const [filterOverlay, setFilterOverlay] = useState(false);
  const [originFilter, setOriginFilter] = useState([]);
  const { products, setProducts } = useProducts();

  useEffect(() => {
    console.log(originFilter);
    console.log(filterOverlay);
    // const tags = products.map((element) => {
    //   return element.origin;
    // });
    let tags = [];
    tags.push(products.filter((elem) => elem.origin));
    console.log(tags);
    // const arrayData = [];
    // products.forEach((element) => {
    //   if (!arrayData.includes(element.origin)) {
    //     arrayData.push(element.origin);
    //   }
    //   setOriginFilter(arrayData);
    // });
  }, []);

  return {
    originFilter,
    toggleFilterOverlay,
    filterHandler,
    filterOverlay,
  };

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
}
