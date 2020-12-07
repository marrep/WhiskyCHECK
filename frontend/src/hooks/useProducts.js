import { useEffect, useState } from "react";
import getProductData from "../services/getProductData";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductData().then((product) => setProducts(product.data));
  }, []);

  return {
    products,
  };
}
