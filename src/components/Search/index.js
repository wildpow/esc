import algoliasearch from "algoliasearch/lite";
import PropTypes from "prop-types";
import React, { createRef, useState, useEffect } from "react";
import { InstantSearch } from "react-instantsearch-dom";
import StyledSearchBox from "./styled-search-box";
import StyledSearchResult from "./styled-search-result";
import StyledSearchRoot from "./styled-search-root";
import { useKeyboardEvent, useOnClickOutside } from "../Hooks";

const algoliaClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH,
);

const searchClient = {
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          processingTimeMS: 0,
        })),
      });
    }

    return algoliaClient.search(requests);
  },
};

export default function Search({ indices, pin, searchFocus, setSearchFocus }) {
  const rootRef = createRef();
  const [query, setQuery] = useState();
  // const [hasFocus, setFocus] = useState(false);
  useEffect(() => {
    if (pin === false) setSearchFocus(false);
  }, [searchFocus, pin, setSearchFocus]);
  useKeyboardEvent("Escape", () => {
    setSearchFocus(false);
  });
  useOnClickOutside(rootRef, () => setSearchFocus(false));
  return (
    <StyledSearchRoot ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <StyledSearchBox
          pin={pin}
          onFocus={() => setSearchFocus(true)}
          hasFocus={searchFocus}
          setFocus={setSearchFocus}
        />
        <StyledSearchResult
          show={query && query.length > 0 && searchFocus}
          indices={indices}
        />
      </InstantSearch>
    </StyledSearchRoot>
  );
}

Search.propTypes = {
  indices: PropTypes.instanceOf(Array).isRequired,
  pin: PropTypes.bool.isRequired,
  searchFocus: PropTypes.bool.isRequired,
  setSearchFocus: PropTypes.func.isRequired,
};
