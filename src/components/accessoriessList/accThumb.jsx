import React from "react";

const AccThumb = ({ stuff }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }} key={stuff.title}>
      <h4>{stuff.title}</h4>
      <p>{stuff.priceRange.minVariantPrice.amount}</p>
    </div>
  );
};

export default AccThumb;
