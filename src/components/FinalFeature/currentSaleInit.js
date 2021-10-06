import { sortProductByPrice } from "../New-Feature/helperFunctions";

const currentSaleInit = (
  mattresses,
  banners,
  mattBrand,
  mattressComfort,
  mattressTypes
) => {
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
  const typesFilter = mattressTypes.filter((t) =>
    typeKeys.includes(t.urlParam)
  );
  const comfortFilter = mattressComfort.filter((b) =>
    comfortKeys.includes(`${b.firmness}`)
  );
  const brandFilter = mattBrand.filter((a) => brandkeys.includes(a.urlParam));
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
