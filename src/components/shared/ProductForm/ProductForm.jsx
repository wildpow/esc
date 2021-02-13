import PropTypes from "prop-types";

export default function ProductForm({
  variants,
  priceMin,
  priceMax,
  sheets,
  maxQty,
}) {
  return (
    <div>
      {console.log(
        "🚀 ~ file: ProductForm.jsx ~ line 4 ~ ProductForm ~ maxQty",
        maxQty,
      )}
      {console.log(
        "🚀 ~ file: ProductForm.jsx ~ line 4 ~ ProductForm ~ sheets",
        sheets,
      )}
      {console.log(
        "🚀 ~ file: ProductForm.jsx ~ line 4 ~ ProductForm ~ priceMax",
        priceMax,
      )}
      {console.log(
        "🚀 ~ file: ProductForm.jsx ~ line 4 ~ ProductForm ~ variants",
        variants,
      )}
      {console.log(
        "🚀 ~ file: ProductForm.jsx ~ line 4 ~ ProductForm ~ priceMin",
        priceMin,
      )}

      <h1>Product Form</h1>
    </div>
  );
}

ProductForm.defaultProps = {
  sheets: false,
  maxQty: 10,
};

ProductForm.propTypes = {
  variants: PropTypes.instanceOf(Object).isRequired,
  priceMin: PropTypes.string.isRequired,
  priceMax: PropTypes.string.isRequired,
  sheets: PropTypes.bool,
  maxQty: PropTypes.number,
};
