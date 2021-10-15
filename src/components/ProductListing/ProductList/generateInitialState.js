const filterCurrentMattresses = (mattresses, brands, comfort, type, banner) => {
  let newMattresses = mattresses;
  if (
    brands.length === 0 &&
    comfort.length === 0 &&
    type.length === 0 &&
    banner.length === 0
  ) {
    return mattresses;
  }
  if (brands.length >= 1) {
    newMattresses = newMattresses.filter((matt) =>
      brands.includes(matt.brand.urlName)
    );
  }
  if (comfort.length >= 1) {
    newMattresses = newMattresses.filter((matt) =>
      comfort.includes(matt.firmness)
    );
  }
  if (type.length >= 1) {
    newMattresses = newMattresses.filter((t) =>
      type.includes(t.mattressType.slug)
    );
  }
  // if (type.length >= 1) {
  // Finish
  // }
  return newMattresses;
};

const headerSetup = (multipleHeaders, headerData, selectedBrands) => {
  let currentHeader = null;
  const headers = multipleHeaders ? headerData.brandHeaders : headerData;
  if (multipleHeaders) {
    currentHeader =
      selectedBrands.length === 1
        ? headerData.brandHeaders[selectedBrands[0]]
        : headerData.brandHeaders.all;
  } else {
    currentHeader = headerData;
  }
  return { currentHeader, headers };
};

export default function GenerateInitialState(
  queryString,
  multipleHeaders,
  products,
  headers,
  filterState
) {
  const currentMattresses = queryString
    ? filterCurrentMattresses(
        products,
        filterState.brand.selectedBrandCheckBoxes,
        filterState.comfort.selectedComfortCheckBoxes,
        filterState.type.selectedTypeCheckBoxes,
        filterState.banner.selectedBannerCheckBoxes
      )
    : products;
  const headerState = headerSetup(
    multipleHeaders,
    headers,
    filterState.brand.selectedBrandCheckBoxes
  );
  const state = {
    beforeFilterMattresses: products,
    currentMattresses,
    ...filterState.banner,
    ...filterState.brand,
    ...filterState.type,
    ...filterState.comfort,
    ...headerState,
    queryString,
    multipleHeaders,
  };
  return state;
}
