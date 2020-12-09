import { useEffect, useState } from "react";
import getProductData from "../services/getProductData";
import loadLocally from "../lib/loadLocally";
import saveLocally from "../lib/saveLocally";

export default function useProducts() {
  const [products, setProducts] = useState(loadLocally("products") ?? []);

  useEffect(() => {
    getProductData().then((product) => setProducts(product.data));
  }, []);

  useEffect(() => {
    saveLocally("products", products);
  }, [products]);

  return {
    products,
  };
}
