import styled from "styled-components/macro";
import PropTypes from "prop-types";
import BookmarkOn from "../../assets/icons/bookmarkOn.svg";
import BookmarkOff from "../../assets/icons/bookmarkOff.svg";

export default function BookmarkIcon({ id, toggleBookmark, bookmarks }) {
  BookmarkIcon.propTypes = {
    id: PropTypes.number,
    toggleBookmark: PropTypes.func.isRequired,
    bookmarks: PropTypes.array.isRequired,
  };

  return (
    <Wrapper>
      <Icon
        src={
          bookmarks.some((product) => product.id === id)
            ? BookmarkOn
            : BookmarkOff
        }
        alt=""
        onClick={() => toggleBookmark(id)}
      />
      <Text>Merken</Text>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  text-decoration: none;
  width: auto;
`;

export const Icon = styled.img`
  width: 80%auto;
`;

export const Text = styled.span`
  color: #575757;
  display: block;
  font-size: 12px;
  font-weight: 200;
  margin-top: 5px;
  text-decoration: none;
`;
