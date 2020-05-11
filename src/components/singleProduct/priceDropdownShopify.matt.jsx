import React, { useState } from "react";

const ShopifyDropDown = ({ shopifyBase, shopifyMattress }) => {
  const [currentSize, setCurrentSize] = useState("");
  const [currentBase, setCurrentBase] = useState("");
  const test2 = ["twin", "twinxl", "full", "queen", "king"];

  function createMattSelect(variants) {
    const test = { twin: 0, twinxl: 1, full: 2, queen: 3, king: 4 };
    const newVarents = new Array(4).fill("test");
    if (variants.length === 5) return variants;
    for (let i = 0; i < variants.length; i += 1) {
      newVarents.splice(test[variants[i].title.toLowerCase()], 1, variants[i]);
    }
    return newVarents;
  }
  const mattressVariants = createMattSelect(shopifyMattress.variants);
  return (
    <div>
      <small>
        Some mattresses are only manufactured in certain sizes. See menu for
        available sizes.
      </small>
      <select name="size" id="size" defaultValue="Select Size">
        {mattressVariants.map((matt, index) => {
          if (matt === "test") {
            return (
              <option value={index} key={matt.title} disabled>
                {`${test2[index]} (Not Available)`}
              </option>
            );
          }
          return (
            <option value={index} key={matt.title}>
              {matt.title}
            </option>
          );
        })}
      </select>
      ShopifyDropDown
    </div>
  );
};

export default ShopifyDropDown;
