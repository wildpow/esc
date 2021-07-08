import { Link } from "gatsby";
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom";

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;
  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount}
      &nbsp;result
      {hitCount !== 1 ? `s` : ``}
    </div>
  ) : (
    <div>
      <div className="HitCount">0 results</div>
      <div>
        <h4>
          Can't find what your looking for?
          <br /> Try these helpful links.
        </h4>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/brands/list">Shop all mattress brands</Link>
          <Link to="/accessories/list">Shop all accessories</Link>
          <h5>
            Or contact us <Link to="/contact-us">here</Link>
          </h5>
        </div>
      </div>
    </div>
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
