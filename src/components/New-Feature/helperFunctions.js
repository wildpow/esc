export const sortProductByPrice = (list) =>
  list.sort(
    (a, b) =>
      Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
      Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount)
  );

export function capitalizeFirstLetter(string) {
  // return string[0].toUpperCase() + string.slice(1);
  return string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
}
