import React, { useRef } from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import { theme, styled, css } from "twin.macro";
import VisuallyHidden from "@reach/visually-hidden";
import SearchIcon from "../../svgs/search-solid.svg";
import iconEntry from "../../keyframes/iconEntry.styled";
import CloseIcon from "../../svgs/times-solid.svg";

const open = css`
  width: calc(100% - 60px);
  background: ${theme`colors.blueGray[50]`};
  cursor: text;
  padding-left: 1.6em;
  .SearchInput {
    border: auto;
  }
`;
const closed = css`
  width: 0;
  background: transparent;
  cursor: pointer;
  margin-left: -1em;
  padding-left: 1em;
  .SearchInput {
    border: none;
  }
`;
const baseStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;
  font-family: ${theme`fontFamily.sans`};
  .SearchInput {
    left: 60px;
    z-index: 1;
    position: absolute;
    height: 60px;
    outline: none;

    font-size: 1.1em;
    transition: 100ms;
    border-radius: 2px;
    color: ${theme`colors.blueGray[900]`};
    &::placeholder {
      color: ${theme`colors.blueGray[600]`};
    }
  }
`;

const SearchButton = styled(`button`)`
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  padding: 0;
  background: ${({ hasFocus }) =>
    hasFocus ? theme`colors.rose[800]` : "transparent"};
  &:focus {
    box-shadow: 0 0 0 1px ${theme`colors.blue["300"]`} inset;
    outline: 0;
    transition: box-shadow 0.15s ease-in-out;
  }
  transition: all 0.2s ease;

  &:hover {
    transform: ${({ hasFocus }) => (hasFocus ? "scale(1.0)" : "scale(1.2)")};
    .searchIcon {
      color: ${theme`colors.blue["900"]`};
    }
    .closeIcon {
      transform: scale(1.2);
    }
  }
  .closeIcon,
  .searchIcon {
    height: 31px;
    width: 31px;
    pointer-events: none;
  }
  .searchIcon {
    display: ${({ pin }) => (pin ? "initial" : "none")};
    color: ${({ hasFocus }) =>
      !hasFocus ? theme`colors.blueGray["600"]` : theme`colors.white`};
    animation: ${iconEntry} 0.75s ease forwards;
  }
  .closeIcon {
    transition: all 0.2s ease;
    color: white;
  }
`;

export default connectSearchBox(
  ({ refine, currentRefinement, onFocus, hasFocus, setFocus, pin }) => {
    const node = useRef(null);
    const setOpen = () => {
      node.current.focus();
      setFocus(!hasFocus);
    };
    return (
      <form className={baseStyles}>
        <SearchButton
          type="button"
          pin={pin}
          onClick={() => setOpen()}
          hasFocus={hasFocus}
          title={hasFocus ? "close search" : "Search our site"}
          aria-label={hasFocus ? "close search" : "Search our site"}
        >
          <span aria-hidden>
            <VisuallyHidden>
              {hasFocus ? "close search" : "Search our site"}
            </VisuallyHidden>
            {hasFocus ? (
              <CloseIcon className="closeIcon" title="close search" />
            ) : (
              <SearchIcon className="searchIcon" title="open search" />
            )}
          </span>
        </SearchButton>
        <input
          className={`SearchInput ${hasFocus ? open : closed}`}
          type="text"
          placeholder="Product Search"
          aria-label="Search"
          onChange={(e) => refine(e.target.value)}
          value={currentRefinement}
          onFocus={onFocus}
          ref={node}
        />
      </form>
    );
  }
);
