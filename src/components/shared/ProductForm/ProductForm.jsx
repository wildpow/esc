import { useState } from "react";
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
    let temp;
    products.forEach((product) => {
      temp = product.title.split(" / ");
      if (sortedProductsByColor[temp[1]] === undefined) {
        sortedProductsByColor[temp[1]] = [];
        sortedProductsByColor[temp[1]].push(product);
      } else {
        sortedProductsByColor[temp[1]].push(product);
      }
    });
    const colorPalette = sheetColors(Object.keys(sortedProductsByColor), title);
    return { sortedProductsByColor, colorPalette };
  };
  const test = generateInitialState(variants, titleOfProduct);
  const [state, setState] = useState({ activeColor: "", colorList: null });
  return (
    <ProductFormRoot onSubmit={handleSubmit}>
      {console.log(state)}
      {test.colorPalette.map((color) => (
        <label
          onChange={() => setState(color.title)}
          key={color.title}
          htmlFor={color.title}
          style={{
            width: "40px",
            height: "40px",
            backgroundSize: "auto 100%",
            backgroundImage: `url(${color.colorImg})`,
          }}
        >
          <input
            checked={color.title === state.activeColor}
            type="checkbox"
            style={{ display: "none" }}
            id={color.title}
            label={color.title}
          />
        </label>
      ))}

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
