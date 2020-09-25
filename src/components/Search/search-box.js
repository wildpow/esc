import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import styled from "styled-components";
import VisuallyHidden from "@reach/visually-hidden";
import SearchIcon from "../../assets/search-solid.svg";
import { colors, dimensions } from "../../utils/styles";

const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  height: ${dimensions.headerHeight};
  width: ${dimensions.headerHeight};
  padding: 0;
  background: ${({ hasFocus }) =>
    hasFocus ? colors.blue[800] : "transparent"};
`;

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus, hasFocus, setFocus }) => (
    <form className={className}>
      <input
        className="SearchInput"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
      {console.log("ppop", hasFocus)}
      <SearchButton
        type="button"
        onClick={() => setFocus(!hasFocus)}
        hasFocus={hasFocus}
      >
        <span aria-hidden>
          <VisuallyHidden>Search Our web site</VisuallyHidden>
          <SearchIcon className="SearchIcon" />
        </span>
      </SearchButton>
    </form>
  ),
);
