import { useStaticQuery, graphql } from "gatsby";
import { capitalizeFirstLetter } from "../../../MattressList/helperFunctions";

export default () => {
  const { banners } = useStaticQuery(
    graphql`
      query saleFilters {
        banners: datoCmsFrontPage {
          currentSaleTags {
            banner
            slug
          }
          otherFilters {
            banner
            slug
          }
        }
      }
    `
  );
  const initialState = {
    bannerCheckBoxes: [
      {
        checked: false,
        urlParam: "currentSale",
        displayName: "Current Sale",
      },
    ],

    bannerMasterKeyList: [],
    currentSaleBannerKeyList: [],
  };
  banners.currentSaleTags.forEach((element, index) => {
    initialState.currentSaleBannerKeyList.push(element.banner);
  });
  banners.otherFilters.forEach((element) => {
    initialState.bannerMasterKeyList.push(element.banner);
    initialState.bannerCheckBoxes.push({
      checked: false,
      urlParam: element.slug,
      displayName: capitalizeFirstLetter(element.banner.toLowerCase()),
    });
  });
  initialState.bannerQueryStringKeys = [
    ...Array(initialState.bannerCheckBoxes.length).keys(),
  ];
  return initialState;
};
