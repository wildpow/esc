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
    .searchIcon {
      transform: scale(1.2);
      color: ${colors.blue["900"]};
    }
    .closeIcon {
      transform: scale(1.2);
    }
  }
  .closeIcon,
  .searchIcon {
    height: 31px;
    transition: all 0.2s ease;
    /* transition: transform 0.2s ease; */
    margin: 0;
    width: 31px;
    pointer-events: none;
  }
  .searchIcon {
    display: ${({ pin }) => (pin ? "initial" : "none")};
    color: ${({ hasFocus }) => (!hasFocus ? colors.gray["600"] : colors.white)};
  }
  .closeIcon {
    /* animation: ${iconEntry} 0.75s ease forwards;
    transition: all 0.2s ease; */

    color: white;
  }
`;

export default connectSearchBox(
  ({
    refine,
    currentRefinement,
    className,
    onFocus,
    hasFocus,
    setFocus,
    pin,
  }) => (
    <form className={className}>
      <SearchButton
        type="button"
        pin={pin}
        onClick={() => setFocus(!hasFocus)}
        hasFocus={hasFocus}
      >
        {hasFocus ? (
          <CloseIcon className="closeIcon" />
        ) : (
          <SearchIcon className="searchIcon" />
        )}
      </SearchButton>
      <input
        className="SearchInput"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
    </form>
  ),
);
