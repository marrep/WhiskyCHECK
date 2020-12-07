import { useEffect, useState } from "react";
import getProductData from "../services/getProductData";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductData().then((product) => setProducts(product.data));
  }, []);

  return {
    products,
    sortProducts,
    setProducts,
  };

  function sortProducts(sortSelector, products) {
    if (sortSelector === "NameUp") {
      setProducts(
        Object.assign(
          [],
          products.sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
          })
        )
      );
    }
    if (sortSelector === "NameDown") {
      setProducts(
        Object.assign(
          [],
          products.sort((a, b) => {
            if (a.title > b.title) return -1;
            if (a.title < b.title) return 1;
            return 0;
          })
        )
      );
    }
  }
}
