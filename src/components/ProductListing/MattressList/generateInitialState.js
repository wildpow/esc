import { filterCurrentMattresses } from "./helperFunctions";

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
        filterState.banner.selectedBannerCheckBoxes,
        {
          currentSale: filterState.banner.currentSaleBannerKeyList,
          otherKeys: filterState.banner.bannerMasterKeyList,
        }
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
