import { useState, useEffect } from "react";
import { findProduct } from "../../services/services";
import { useProducts } from "../hooks";
import { loadLocally, saveLocally } from "../../lib/localStorage";

const STORAGE_KEY = "bookmarks";

export default function useBookmarks() {
  const { products } = useProducts();
  const [bookmarks, setBookmarks] = useState(loadLocally(STORAGE_KEY) ?? []);

  useEffect(() => {
    saveLocally(STORAGE_KEY, bookmarks);
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
