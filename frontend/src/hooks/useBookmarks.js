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
    toggleBookmark,
    bookmarks,
  };

  function toggleBookmark(id) {
    const newBookmarkArray = [
      ...bookmarks,
      { image: findProduct(id, products).image, id: id },
    ];
    !bookmarks.some((product) => product.id === id)
      ? setBookmarks(newBookmarkArray)
      : deleteBookmark(id);
  }

  function deleteBookmark(id) {
    const index = bookmarks.findIndex((product) => product.id === id);
    const newBookmarkArray = [
      ...bookmarks.slice(0, index),
      ...bookmarks.slice(index + 1),
    ];
    setBookmarks(newBookmarkArray);
  }
}
