import PropTypes, { bool } from "prop-types";
import { Link } from "gatsby";

const MatttressListSitemap = ({ learnMore, mattresses }) => (
  <article>
    <header>
      <h4>
        <Link to={`/brands/${mattresses[0].brand.urlName}`}>
          {mattresses[0].brand.displayName}
        </Link>
      </h4>
      {learnMore && (
        <div>
          <Link to={`/brands/${mattresses[0].brand.urlName}/landing`}>
            Brand Info
          </Link>
        </div>
      )}
    </header>
    <ul>
      {mattresses.map((matt) => (
        <li key={matt.id}>
          <Link to={`/brands/${matt.brand.urlName}/${matt.slug}`}>
            {`${matt.subline.name} ${matt.nameWithout}`}
          </Link>
        </li>
      ))}
    </ul>
  </article>
);

export default MatttressListSitemap;

MatttressListSitemap.defaultProps = {
  learnMore: false,
};
MatttressListSitemap.propTypes = {
  learnMore: bool,
  mattresses: PropTypes.instanceOf(Object).isRequired,
};
