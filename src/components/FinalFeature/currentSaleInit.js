import { sortProductByPrice } from "../New-Feature/helperFunctions";
// Why does this function exist:
// - Filter and sort mattresses by current sale from CMS
// - Disable filter checkboxes with no results,
// - Do not use the banner filter.
export const updateDisabled = (master, queryArr, state) => {
  const newState = [];
  state.forEach((s) => {
    const updatedItem = s;
    updatedItem.disabled = true;
    newState.push(updatedItem);
  });
  queryArr.forEach((q) => {
    newState[master.indexOf(q)].disabled = false;
  });
  return newState;
};

const currentSaleInit = (
  mattresses,
  banners,
  mattBrand,
  mattressComfort,
  mattressTypes
) => {
  const masterList = {
    comfort: mattressComfort.comfortKeys,
    type: mattressTypes.typeKeyList,
    brand: mattBrand.brandNames,
  };

  const newFilteredMattresses = sortProductByPrice(
    mattresses.filter((matt) => banners.includes(matt.newSaleBanner.banner))
  );

  const typesInSale = {};
  const comfortInSale = {};
  const brandsInSale = {};
  newFilteredMattresses.forEach((mat) => {
    brandsInSale[mat.brand.urlName] = "";
    comfortInSale[mat.firmness] = "";
    typesInSale[mat.mattressType.slug] = "";
  });

  const typeKeys = Object.keys(typesInSale);
  const brandkeys = Object.keys(brandsInSale);
  const comfortKeys = Object.keys(comfortInSale);

  const typesFilter = updateDisabled(
    masterList.type,
    typeKeys,
    mattressTypes.typeCheckBoxes
  );

  const comfortFilter = updateDisabled(
    masterList.comfort,
    comfortKeys,
    mattressComfort.comfortCheckBoxes
  );

  const brandFilter = updateDisabled(
    masterList.brand,
    brandkeys,
    mattBrand.brandState.brandCheckBoxes
  );
  return {
    mattresses: newFilteredMattresses,
    filters: {
      comfort: {
        selectedComfortCheckBoxes: [],
        comfortCheckBoxes: comfortFilter,
      },
      type: {
        selectedTypeCheckBoxes: [],
        typeCheckBoxes: typesFilter,
      },
      brand: {
        selectedBrandCheckBoxes: [],
        brandCheckBoxes: brandFilter,
      },
      banner: {
        selectedBannerCheckBoxes: false,
        bannerCheckBoxes: false,
        currentSaleBannerKeyList: false,
        bannerMasterKeyList: false,
      },
    },
  };
};
export default currentSaleInit;
