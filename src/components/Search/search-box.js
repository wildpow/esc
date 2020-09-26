import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import styled from "styled-components";
import VisuallyHidden from "@reach/visually-hidden";
import SearchIcon from "../../assets/search-solid.svg";
import { colors, dimensions } from "../../utils/styles";
import { iconEntry } from "../../utils/keyframes";
import CloseIcon from "../../assets/times-solid.svg";

const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${dimensions.headerHeight};
  width: ${dimensions.headerHeight};
  padding: 0;
  background: ${({ hasFocus }) => (hasFocus ? colors.red[800] : "transparent")};
  animation: ${iconEntry} 0.75s ease forwards;
  :focus {
    box-shadow: 0 0 0 1px ${colors.blue["300"]} inset;
    outline: 0;
    transition: box-shadow 0.15s ease-in-out;
  }

  :hover {
    .SearchIcon {
      transform: scale(1.2);
      color: ${colors.blue["900"]};
      color: ${({ hasFocus }) =>
        !hasFocus ? colors.blue["900"] : colors.white};
    }
  }
  .SearchIcon {
    transition: all 0.2s ease;
    height: 31px;
    margin: 0;
    width: 31px;
    color: ${({ hasFocus }) => (!hasFocus ? colors.gray["600"] : colors.white)};
    pointer-events: none;
  }
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
      <SearchButton
        type="button"
        onClick={() => setFocus(!hasFocus)}
        hasFocus={hasFocus}
      >
        <span aria-hidden>
          <VisuallyHidden>Search Our web site</VisuallyHidden>
          {hasFocus ? (
            <CloseIcon className="SearchIcon" />
          ) : (
            <SearchIcon className="SearchIcon" />
          )}
        </span>
      </SearchButton>
    </form>
  ),
);
