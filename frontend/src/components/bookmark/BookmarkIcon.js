import BookmarkOff from "../../assets/icons/bookmarkOff.svg";
import BookmarkOn from "../../assets/icons/bookmarkOn.svg";
import styled from "styled-components";

export default function BookmarkIcon({
  id,
  products,
  toggleBookmark,
  bookmarks,
}) {
  return (
    <BookmarkIconWrapper>
      <BookmarkIconImage
        src={
          bookmarks.some((product) => product.id === id)
            ? BookmarkOn
            : BookmarkOff
        }
        alt=""
        onClick={() => toggleBookmark(id, products)}
      />
      <BookmarkIconText>Merken</BookmarkIconText>
    </BookmarkIconWrapper>
  );
}

export const BookmarkIconWrapper = styled.div`
  width: auto;
  text-decoration: none;
  overflow: hidden;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
export const BookmarkIconImage = styled.img`
  width: 80%auto;
`;
export const BookmarkIconText = styled.span`
  text-decoration: none;
  margin-top: 5px;
  font-weight: 200;
  font-size: 12px;
  display: block;
  color: #575757;
`;
