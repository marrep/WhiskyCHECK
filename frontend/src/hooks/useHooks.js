import { useEffect, useState } from "react";
import getProductData from "../services/getProductData";

export default function useHooks() {
  const [products, setProducts] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    getProductData().then((product) => setProducts(product.data));
  }, []);

  function deleteBookmark(id) {
    console.log(id);
    const index = bookmarks.findIndex((product) => product.id === id);
    console.log(index);
    setBookmarks([
      ...bookmarks.slice(0, index - 1),
      ...bookmarks.slice(index + 1),
    ]);
  }

  function toggleBookmark(id) {
    !bookmarks.some((product) => product.id === id)
      ? setBookmarks([...bookmarks, { image: products[id].image, id: id }])
      : deleteBookmark(id);
  }

  return {
    deleteBookmark,
    toggleBookmark,
    products,
    bookmarks,
  };
}
