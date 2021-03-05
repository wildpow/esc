import PropTypes, { bool, string } from "prop-types";
import { Link } from "gatsby";

export const MatttressListSitemap = ({ learnMore, mattresses }) => (
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

MatttressListSitemap.defaultProps = {
  learnMore: false,
};
MatttressListSitemap.propTypes = {
  learnMore: bool,
  mattresses: PropTypes.instanceOf(Object).isRequired,
};

export const ProductListSitemap = ({
  productTitle,
  productUrl,
  baseUrl,
  products,
}) => (
  <article>
    <header>
      <h4>
        <Link
          to={
            productUrl === "accessories"
              ? `/${baseUrl}/${productUrl}`
              : `/${baseUrl}`
          }
        >
          {productTitle}
        </Link>
      </h4>
    </header>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/${baseUrl}/${product.slug}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  </article>
);

export const OtherListSitemap = ({ items, baseUrl, itemTitle }) => (
  <article>
    <header className="topHeader">
      <h3>
        <Link to={baseUrl}>{itemTitle}</Link>
      </h3>
    </header>
    <ul className="mattBox">
      {items.map((item) => (
        <li key={item.id}>
          <Link to={`/${baseUrl}/${item.slug}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </article>
);
ProductListSitemap.propTypes = {
  productTitle: string,
  productUrl: string,
  baseUrl: string,
  products: PropTypes.instanceOf(Object).isRequired,
};
ProductListSitemap.defaultProps = {
  productTitle: "Default Title",
  productUrl: "endofUrl",
  baseUrl: "accessories",
};
