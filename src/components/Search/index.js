import algoliasearch from "algoliasearch/lite";
import React, { createRef, useState } from "react";
import { InstantSearch } from "react-instantsearch-dom";
import StyledSearchBox from "./styled-search-box";
import StyledSearchResult from "./styled-search-result";
import StyledSearchRoot from "./styled-search-root";
import useClickOutside from "./use-click-outside";

export default function Search({ indices, pin }) {
  const rootRef = createRef();
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH,
  );

  useClickOutside(rootRef, () => setFocus(false));

  return (
    <StyledSearchRoot ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        {console.log(pin, "Dont forget to delete this BRO!!!!")}
        <StyledSearchBox
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
