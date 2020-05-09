import React, { useState } from "react";

const ShopifyDropDown = ({ shopifyBase, shopifyMattress }) => {
  const [currentSize, setCurrentSize] = useState("");
  const [currentBase, setCurrentBase] = useState("");
  function createMattSelect(variants) {
    const test = ["twin", "twinxl", "full", "queen", "king"];
    const newVarents = [];
    if (variants.length === 5) return variants;
    for (let i = 0; i < test.length; i += 1) {
      if (variants[i].title === test[i].title) {
        newVarents.push(variants[i]);
      } else {
        newVarents.push({ title: `${test[i]} (Unavalible)`, disabled: true });
      }
    }
    return newVarents;
  }
  const mattressVariants = [];
  return (
    <div>
      {console.log("after", createMattSelect(shopifyMattress.variants))}
      {console.log("before", shopifyMattress.variants)}
      <select name="" id="">
        <option value="">bla</option>
      </select>
      ShopifyDropDown
    </div>
  );
};

export default ShopifyDropDown;
