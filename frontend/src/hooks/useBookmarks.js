import { useState, useEffect } from "react";
import findProduct from "../services/findProduct";
import useProducts from "./useProducts";
import loadLocally from "../lib/loadLocally";
import saveLocally from "../lib/saveLocally";

export default function useBookmarks() {
  const { products, setProducts } = useProducts();
  const [bookmarks, setBookmarks] = useState(loadLocally("bookmarks") ?? []);

  useEffect(() => {
    saveLocally("bookmarks", bookmarks);
  }, [bookmarks]);

  return {
    deleteBookmark,
    toggleBookmark,
    bookmarks,
  };

  function deleteBookmark(id) {
    const index = bookmarks.findIndex((product) => product.id === id);
    setBookmarks([...bookmarks.slice(0, index), ...bookmarks.slice(index + 1)]);
  }

  function toggleBookmark(id) {
    !bookmarks.some((product) => product.id === id)
      ? setBookmarks([
          ...bookmarks,
          { image: findProduct(id, products).image, id: id },
        ])
      : deleteBookmark(id);
    console.log(bookmarks);
  }
}
