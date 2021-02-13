import PropTypes from "prop-types";
import { ProductFormRoot } from "./ProductForm.styled";

export default function ProductForm({
  variants,
  priceMin,
  priceMax,
  sheets,
  maxQty,
}) {
  const handleSubmit = () => console.log("SUBMIT!");
  const generateInitialState = (products) => {
    const product = {};
    let temp;

    products.map((p) => {
      temp = p.title.split(" / ");
      if (product[temp[1]] === undefined) {
        product[temp[1]] = [];
        product[temp[1]].push(p);
      } else {
        product[temp[1]].push(p);
      }

      return null;
    });
    console.log(product);
  };
  const stuff = generateInitialState(variants);
  return (
    <ProductFormRoot onSubmit={handleSubmit}>
      {/* {console.log(
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
      )} */}

      <h1>Product Form</h1>
    </ProductFormRoot>
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
