/* eslint-disable import/prefer-default-export */

export const sortProductByPrice = (list) =>
  list.sort(
    (a, b) =>
      Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
      Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount)
  );
