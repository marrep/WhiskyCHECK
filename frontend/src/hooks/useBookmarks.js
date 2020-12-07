import { useState } from "react";
import { findProduct } from "../services/helpers";
import useProducts from "./useProducts";

export default function useBookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const { products, setProducts } = useProducts();

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
  }
}
