export const sortProductByPrice = (list) =>
  list.sort(
    (a, b) =>
      Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
      Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount)
  );

export const capitalizeFirstLetter = (string) =>
  // return string[0].toUpperCase() + string.slice(1);
  string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

export const filterCurrentMattresses = (
  mattresses,
  currentBrands,
  currentComforts,
  currentTypes,
  currentBanners = [],
  bannerKeys
) => {
  let newMattresses = mattresses;
  if (
    currentBrands.length === 0 &&
    currentComforts.length === 0 &&
    currentTypes.length === 0 &&
    currentBanners.length === 0
  ) {
    return mattresses;
  }
  if (currentBrands.length >= 1) {
    newMattresses = newMattresses.filter((matt) =>
      currentBrands.includes(matt.brand.urlName)
    );
  }
  if (currentComforts.length >= 1) {
    newMattresses = newMattresses.filter((matt) =>
      currentComforts.includes(matt.firmness)
    );
  }
  if (currentTypes.length >= 1) {
    newMattresses = newMattresses.filter((t) =>
      currentTypes.includes(t.mattressType.slug)
    );
  }
  if (currentBanners.length >= 1) {
    let newCurrentBanners = [];
    const testKeys = ["current sale", ...bannerKeys.otherKeys];
    currentBanners.forEach((element) => {
      if (element === 0) {
        newCurrentBanners = [...newCurrentBanners, ...bannerKeys.currentSale];
      } else {
        newCurrentBanners.push(testKeys[element]);
      }
    });
    newMattresses = newMattresses.filter((q) =>
      q.newSaleBanner
        ? newCurrentBanners.includes(q.newSaleBanner.banner)
        : null
    );
  }

  return newMattresses;
};
