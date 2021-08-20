import { Link } from "gatsby";
import styled from "@emotion/styled";
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom";
import { PrimaryButton, Button } from "../../styles/buttons.old.styled";
import { fontSize, spacing } from "../../styles/theme.styled";

const EmptySearch = styled.div`
  .emptySeachLinkWrapper {
    /* padding-: ${spacing[8]} 0; */
    width: 100%;
    display: flex;
    gap: ${spacing["4"]};
    flex-direction: column;
  }
  h4 {
    font-weight: 400;
    line-height: 1.3rem;
    text-align: center;
    font-size: ${fontSize.lg};
  }
  h5 {
    text-align: center;

    font-size: ${fontSize.lg};
  }
`;
// padding: ${spacing["8"]} 0;
// width: 100%;
// display: flex;
// gap: ${spacing["4"]};
// flex-direction: column;

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;
  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount}
      &nbsp;result
      {hitCount !== 1 ? `s` : ``}
    </div>
  ) : (
    <EmptySearch>
      <div className="HitCount">0 results</div>
      <div>
        <h4>
          Can&lsquo;t find what your looking for?
          <br /> Try these helpful links.
        </h4>
        <div className="emptySeachLinkWrapper">
          <Button to="/brands/list">Shop all Mattressess</Button>
          <Button to="/brands/list">Shop all Adjustables</Button>
          <Button to="/accessories/list">Shop all Accessories</Button>
          <Button to="/x-chair">Shop all X-Chairs</Button>
          <Button inverse to="/contact-us">
            Contact Us
          </Button>
        </div>
      </div>
    </EmptySearch>
  );
});
const PageHit = ({ hit }) => (
  <div>
    <Link to={hit.slug}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <Snippet attribute="description" hit={hit} tagName="mark" />
  </div>
);
const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
);
const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map((index) => (
      <HitsInIndex index={index} key={index.name} />
    ))}
    <PoweredBy />
  </div>
);

export default SearchResult;
