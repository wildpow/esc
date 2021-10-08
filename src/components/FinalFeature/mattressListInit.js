export default function mattressListInit(brands, types, comfort, banners) {
  return {
    masterSanitizeList: {
      queryKeys: ["brand", "type", "comfort", "banner"],
      comfort: comfort.comfortKeys,
      type: types.typeKeyList,
      brand: brands.brandNames,
      banner: Object.keys(banners.bannerQueryStringKeys),
    },
    initialFilters: {
      type: {
        selectedTypeCheckBoxes: [],
        typeCheckBoxes: types.typeCheckBoxes,
      },
      brand: {
        selectedBrandCheckBoxes: [],
        brandCheckBoxes: brands.brandState.brandCheckBoxes,
      },
      comfort: {
        selectedComfortCheckBoxes: [],
        comfortCheckBoxes: comfort.comfortCheckBoxes,
      },
      banner: {
        selectedBannerCheckBoxes: [],
        bannerCheckBoxes: banners.bannerCheckBoxes,
        currentSaleBannerKeyList: banners.currentSaleBannerKeyList,
        bannerMasterKeyList: banners.bannerMasterKeyList,
      },
    },
  };
}
