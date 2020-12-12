import { useEffect, useState } from "react";
import getProductData from "../services/getProductData";
import loadLocally from "../lib/loadLocally";
import saveLocally from "../lib/saveLocally";

const STORAGE_KEY = "products";

export default function useProducts() {
  const [products, setProducts] = useState(loadLocally(STORAGE_KEY) ?? []);

  useEffect(() => {
    getProductData().then((product) => setProducts(product.data));
  }, []);

  useEffect(() => {
    saveLocally(STORAGE_KEY, products);
  }, [products]);

  return {
    products,
  };
}
