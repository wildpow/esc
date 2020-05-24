import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import StoreContext from "../../context/StoreContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 0 2rem 0;
`;
const LineItem = ({ item }) => {
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext);

  const variantImage = item.variant.image ? (
    <img
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
      height="60px"
    />
  ) : null;

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
        (option) => `${option.name}: ${option.value} `,
      )
    : null;

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id);
  };

  return (
    <Wrapper>
      {console.log(item)}
      <Link to={`/product/${item.variant.product.handle}/`}>
        {variantImage}
      </Link>
      <p>
        {item.title}
        {`  `}
        {item.variant.title === !"Default Title" ? item.variant.title : ""}
      </p>
      {selectedOptions}
      {item.quantity}
      <button onClick={handleRemove} type="button">
        Remove
      </button>
    </Wrapper>
  );
};

export default LineItem;
