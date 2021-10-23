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
  const selectedBannerCheckBoxes =
    filterState.banner.selectedBannerCheckBoxes.length === 0
      ? filterState.banner.selectedBannerCheckBoxes
      : filterState.banner.selectedBannerCheckBoxes.map((i) => Number(i));
  const selectedComfortCheckBoxes =
    filterState.comfort.selectedComfortCheckBoxes.length === 0
      ? filterState.comfort.selectedComfortCheckBoxes
      : filterState.comfort.selectedComfortCheckBoxes.map((i) => Number(i));
  const currentMattresses = queryString
    ? filterCurrentMattresses(
        products,
        filterState.brand.selectedBrandCheckBoxes,
        selectedComfortCheckBoxes,
        filterState.type.selectedTypeCheckBoxes,
        selectedBannerCheckBoxes,
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
    selectedBannerCheckBoxes,
    ...filterState.brand,
    ...filterState.type,
    ...filterState.comfort,
    selectedComfortCheckBoxes,
    ...headerState,
    queryString,
    multipleHeaders,
  };
  return state;
}
