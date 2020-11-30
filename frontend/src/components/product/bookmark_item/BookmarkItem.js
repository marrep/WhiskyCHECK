import React from "react";

export default function BookmarkItem({ image, deleteBookmark, index }) {
  return (
    <div>
      <img src={image} alt="" />
      <button>Jetzt kaufen</button>
      <p onClick={() => deleteBookmark(index)}>X</p>
    </div>
  );
}
