export default function MattressListInit(brands, types, comfort, banners) {
  return {
    masterSanitizeList: {
      queryKeys: ["brand", "type", "comfort", "banner"],
      comfort: comfort.comfortKeys,
      type: types.typeKeyList,
      brand: brands.brandNames,
      banner: [...Array(banners.bannerCheckBoxes.length).keys()],
    },
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
  };
}
