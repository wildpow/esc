import PropTypes from "prop-types";

export default function ProductList({
  queryString,
  multipleHeaders,
  headers,
  products,
  initialFilterState,
  breadCrumbsNext,
  breadCrumbsHere,
}) {
  return (
    <div>
      <h2>New Product List</h2>
    </div>
  );
}

ProductList.defaultProps = {
  queryString: false,
  multipleHeaders: false,
};
ProductList.propTypes = {
  queryString: PropTypes.bool,
  multipleHeaders: PropTypes.bool,
  headers: PropTypes.instanceOf(Object).isRequired,
  products: PropTypes.instanceOf(Object).isRequired,
  initialFilterState: PropTypes.instanceOf(Object).isRequired,
  breadCrumbsNext: PropTypes.string.isRequired,
  breadCrumbsHere: PropTypes.func.isRequired,
};
