import { useRef } from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import styled from "@emotion/styled";
import VisuallyHidden from "@reach/visually-hidden";
import SearchIcon from "../../svgs/search-solid.svg";
import { colors, dimensions } from "../../styles/theme.styled";
import { iconEntry } from "../../styles/keyframes.styled";
import CloseIcon from "../../svgs/times-solid.svg";

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
  /* animation: ${iconEntry} 0.75s ease forwards; */
  :focus {
    box-shadow: 0 0 0 1px ${colors.blue["300"]} inset;
    outline: 0;
    transition: box-shadow 0.15s ease-in-out;
  }
  transition: all 0.2s ease;

  :hover {
    transform: ${({ hasFocus }) => (hasFocus ? "scale(1.0)" : "scale(1.2)")};
    .searchIcon {
      color: ${colors.blue["900"]};
    }
    .closeIcon {
      transform: scale(1.2);
    }
  }
  .closeIcon,
  .searchIcon {
    height: 31px;
    /* transition: all 0.2s ease; */
    /* transition: transform 0.2s ease; */
    margin: 0;
    width: 31px;
    pointer-events: none;
  }
  .searchIcon {
    display: ${({ headerVisible }) => (headerVisible ? "initial" : "none")};
    color: ${({ hasFocus }) => (!hasFocus ? colors.gray["600"] : colors.white)};
    animation: ${iconEntry} 0.35s ease forwards;
  }
  .closeIcon {
    /* animation: ${iconEntry} 0.75s ease forwards;
    transition: all 0.2s ease; */
    transition: all 0.2s ease;

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
    headerVisible,
  }) => {
    const node = useRef(null);
    const setOpen = () => {
      node.current.focus();
      setFocus(!hasFocus);
    };
    return (
      <form className={className}>
        <SearchButton
          type="button"
          headerVisible={headerVisible}
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
          className="SearchInput"
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
