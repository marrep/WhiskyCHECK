import BookmarkOff from "../../../assets/bookmarkOff.svg";
import BookmarkOn from "../../../assets/bookmarkOn.svg";

export default function BookmarkIcon({ toggleBookmark, id, bookmarks }) {
  return (
    <div>
      <img
        src={
          bookmarks.some((product) => product.id === id)
            ? BookmarkOn
            : BookmarkOff
        }
        alt=""
        onClick={() => toggleBookmark(id)}
      />
      <p>Merken</p>
    </div>
  );
}
