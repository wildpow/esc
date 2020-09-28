import algoliasearch from "algoliasearch/lite";
import React, { createRef, useState, useEffect } from "react";
import { InstantSearch } from "react-instantsearch-dom";
import StyledSearchBox from "./styled-search-box";
import StyledSearchResult from "./styled-search-result";
import StyledSearchRoot from "./styled-search-root";
import { useKeyboardEvent, useOnClickOutside } from "../Hooks";

export default function Search({ indices, pin }) {
  const rootRef = createRef();
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH,
  );
  useEffect(() => {
    if (pin === false) setFocus(false);
  }, [hasFocus, pin]);
  useKeyboardEvent("Escape", () => {
    setFocus(false);
  });
  useOnClickOutside(rootRef, () => setFocus(false));
  return (
    <StyledSearchRoot ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <StyledSearchBox
          pin={pin}
          onFocus={() => setFocus(true)}
          hasFocus={hasFocus}
          setFocus={setFocus}
        />
        <StyledSearchResult
          show={query && query.length > 0 && hasFocus}
          indices={indices}
        />
      </InstantSearch>
    </StyledSearchRoot>
  );
}
