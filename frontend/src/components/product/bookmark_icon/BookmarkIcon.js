import BookmarkOff from "../../../assets/bookmarkOff.svg";
import BookmarkOn from "../../../assets/bookmarkOn.svg";

export default function BookmarkIcon({ saveThisItem, id, bookmarks }) {
  return (
    <div>
      <img
        src={
          bookmarks.some((product) => product.id === id)
            ? BookmarkOn
            : BookmarkOff
        }
        alt=""
        onClick={() => saveThisItem(id)}
      />
      <p>Merken</p>
    </div>
  );
}
