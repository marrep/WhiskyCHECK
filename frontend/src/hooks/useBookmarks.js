import { useState } from "react";
import useProducts from "./useProducts";

export default function useBookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const { products } = useProducts();

  console.log(bookmarks);

  function deleteBookmark(id) {
    const index = bookmarks.findIndex((product) => product.id === id);
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
    bookmarks,
  };
}
