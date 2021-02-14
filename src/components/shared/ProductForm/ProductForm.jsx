import PropTypes from "prop-types";
import { ProductFormRoot } from "./ProductForm.styled";
import sheetColors from "./sheetColors";

export default function ProductForm({
  variants,
  typeOfProduct,
  titleOfProduct,
  priceMin,
  priceMax,
  maxQty,
}) {
  const handleSubmit = () => console.log("SUBMIT!");
  const generateInitialState = (products, title) => {
    const sortedProductsByColor = {};
    const productColorTitles = [];
    let temp;
    products.forEach((product) => {
      temp = product.title.split(" / ");
      if (sortedProductsByColor[temp[1]] === undefined) {
        sortedProductsByColor[temp[1]] = [];
        sortedProductsByColor[temp[1]].push(product);
        productColorTitles.push(temp[1]);
      } else {
        sortedProductsByColor[temp[1]].push(product);
      }
    });
    const colorPalette = sheetColors(productColorTitles, title);
    return { sortedProductsByColor, productColorTitles, colorPalette };
  };
  const stuff = generateInitialState(variants, titleOfProduct);
  return (
    <ProductFormRoot onSubmit={handleSubmit}>
      {console.log(stuff)}

      <h1>Product Form</h1>
    </ProductFormRoot>
  );
}

ProductForm.defaultProps = {
  maxQty: 10,
};

ProductForm.propTypes = {
  variants: PropTypes.instanceOf(Object).isRequired,
  titleOfProduct: PropTypes.string.isRequired,
  typeOfProduct: PropTypes.string.isRequired,
  priceMin: PropTypes.string.isRequired,
  priceMax: PropTypes.string.isRequired,
  maxQty: PropTypes.number,
};
