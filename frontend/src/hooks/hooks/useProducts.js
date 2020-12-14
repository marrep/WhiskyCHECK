import { useEffect, useState } from "react";
import { getProductData } from "../../services/services";
import { loadLocally, saveLocally } from "../../lib/localStorage";

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
