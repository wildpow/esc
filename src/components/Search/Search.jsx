import algoliasearch from "algoliasearch/lite";
import PropTypes from "prop-types";
import { createRef, useState, useEffect } from "react";
import { InstantSearch } from "react-instantsearch-dom";
import StyledSearchBox from "./searchBox.styled";
import StyledSearchResult from "./searchResults.styled";
import { useKeyboardEvent, useOnClickOutside } from "../../hooks";

const algoliaClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH
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

export default function Search({
  indices,
  headerVisible,
  searchFocus,
  setSearchFocus,
}) {
  const rootRef = createRef();
  const [query, setQuery] = useState();
  // const [hasFocus, setFocus] = useState(false);
  useEffect(() => {
    if (headerVisible === false) setSearchFocus(false);
  }, [searchFocus, headerVisible, setSearchFocus]);
  useKeyboardEvent("Escape", () => {
    setSearchFocus(false);
  });
  useOnClickOutside(rootRef, () => setSearchFocus(false));
  return (
    <div ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={(e) => setQuery(e.query)}
      >
        <StyledSearchBox
          headerVisible={headerVisible}
          onFocus={() => setSearchFocus(true)}
          hasFocus={searchFocus}
          setFocus={setSearchFocus}
        />
        <StyledSearchResult
          show={query && query.length > 0 && searchFocus}
          indices={indices}
        />
      </InstantSearch>
    </div>
  );
}

Search.propTypes = {
  indices: PropTypes.instanceOf(Array).isRequired,
  headerVisible: PropTypes.bool.isRequired,
  searchFocus: PropTypes.bool.isRequired,
  setSearchFocus: PropTypes.func.isRequired,
};
