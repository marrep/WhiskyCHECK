import BookmarkOff from "../../../assets/bookmarkOff.svg";
import BookmarkOn from "../../../assets/bookmarkOn.svg";
import {
  BookmarkIconWrapper,
  BookmarkIconImage,
  BookmarkIconText,
} from "./BookmarkIconStyled";

export default function BookmarkIcon({ toggleBookmark, id, bookmarks }) {
  return (
    <BookmarkIconWrapper>
      <BookmarkIconImage
        src={
          bookmarks.some((product) => product.id === id)
            ? BookmarkOn
            : BookmarkOff
        }
        alt=""
        onClick={() => toggleBookmark(id)}
      />
      <BookmarkIconText>Merken</BookmarkIconText>
    </BookmarkIconWrapper>
  );
}
