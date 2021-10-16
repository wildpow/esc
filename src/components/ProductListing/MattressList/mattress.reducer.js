import { navigate } from "gatsby";
import { filterCurrentMattresses } from "./helperFunctions";

const queryString = require("query-string");

const filterSelected = (oldState, newItem) => {
  let newSate = [...oldState];
  if (newSate.includes(newItem)) {
    newSate = newSate.filter((item) => item !== newItem);
  } else {
    newSate.push(newItem);
  }
  return newSate;
};
export default function reducer(state, action) {
  let newComfortNumbers;
  let newComfortCheckBoxes;
  let newBrandCheckBoxes;
  let newTypeCheckBoxes;
  let newSelectedType;
  let newSelectedBrand;
  let newCurrentHeader;
  let allfitersEmpty;
  let newBannerCheckBoxes;
  let newBannerSelected;
  switch (action.type) {
    case "low-high":
      return {
        ...state,
        currentMattresses: [...state.currentMattresses].sort(
          (a, b) =>
            Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
            Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount)
        ),
        beforeFilterMattresses: [...state.beforeFilterMattresses].sort(
          (a, b) =>
            Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
            Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount)
        ),
      };
    case "high-low":
      return {
        ...state,
        currentMattresses: [...state.currentMattresses].sort(
          (a, b) =>
            Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount) -
            Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount)
        ),
        beforeFilterMattresses: [...state.beforeFilterMattresses].sort(
          (a, b) =>
            Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount) -
            Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount)
        ),
      };
    case "name a-z":
      return {
        ...state,
        currentMattresses: [...state.currentMattresses].sort((a, b) => {
          const nameA = `${a.subline.name} ${a.nameWithout}`;
          const nameB = `${b.subline.name} ${a.nameWithout}`;
          return nameA > nameB ? 1 : -1;
        }),
        beforeFilterMattresses: [...state.beforeFilterMattresses].sort(
          (a, b) => {
            const nameA = `${a.subline.name} ${a.nameWithout}`;
            const nameB = `${b.subline.name} ${a.nameWithout}`;
            return nameA > nameB ? 1 : -1;
          }
        ),
      };
    case "name z-a":
      return {
        ...state,
        currentMattresses: [...state.currentMattresses].sort((a, b) => {
          const nameA = `${a.subline.name} ${a.nameWithout}`;
          const nameB = `${b.subline.name} ${a.nameWithout}`;
          return nameB > nameA ? 1 : -1;
        }),
        beforeFilterMattresses: [...state.beforeFilterMattresses].sort(
          (a, b) => {
            const nameA = `${a.subline.name} ${a.nameWithout}`;
            const nameB = `${b.subline.name} ${a.nameWithout}`;
            return nameB > nameA ? 1 : -1;
          }
        ),
      };
    case "banner": {
      newBannerCheckBoxes = [...state.bannerCheckBoxes];
      newBannerCheckBoxes[action.index].checked = action.checked;
      newBannerSelected = filterSelected(
        state.selectedBannerCheckBoxes,
        action.index
      );

      if (state.queryString === true) {
        allfitersEmpty =
          state.selectedBrandCheckBoxes.length === 0 &&
          state.selectedComfortCheckBoxes.length === 0 &&
          state.selectedTypeCheckBoxes.length === 0 &&
          newBannerSelected.length === 0;
        navigate(
          `/brands/list${allfitersEmpty ? "" : "?"}${queryString.stringify(
            {
              brand: state.selectedBrandCheckBoxes,
              comfort: state.selectedComfortCheckBoxes,
              type: state.selectedTypeCheckBoxes,
              banner: newBannerSelected,
            },
            { arrayFormat: "comma" }
          )}`
        );
      }
      return {
        ...state,
        selectedBannerCheckBoxes: newBannerSelected,
        bannerCheckBoxes: newBannerCheckBoxes,
        currentMattresses: filterCurrentMattresses(
          state.beforeFilterMattresses,
          state.selectedBrandCheckBoxes,
          state.selectedComfortCheckBoxes,
          state.selectedTypeCheckBoxes,
          newBannerSelected,
          {
            currentSale: state.currentSaleBannerKeyList,
            otherKeys: state.bannerMasterKeyList,
          }
        ),
      };
    }
    case "type": {
      newTypeCheckBoxes = [...state.typeCheckBoxes];
      newTypeCheckBoxes[action.index].checked = action.checked;
      newSelectedType = filterSelected(
        state.selectedTypeCheckBoxes,
        action.value
      );
      if (state.queryString === true) {
        allfitersEmpty =
          state.selectedBrandCheckBoxes.length === 0 &&
          state.selectedComfortCheckBoxes.length === 0 &&
          newSelectedType.length === 0 &&
          state.selectedBannerCheckBoxes.length === 0;
        navigate(
          `/brands/list${allfitersEmpty ? "" : "?"}${queryString.stringify(
            {
              brand: state.selectedBrandCheckBoxes,
              comfort: state.selectedComfortCheckBoxes,
              type: newSelectedType,
              banner: state.selectedBannerCheckBoxes,
            },
            { arrayFormat: "comma" }
          )}`
        );
      }
      return {
        ...state,
        selectedTypeCheckBoxes: newSelectedType,
        typeCheckBoxes: newTypeCheckBoxes,
        currentMattresses: filterCurrentMattresses(
          state.beforeFilterMattresses,
          state.selectedBrandCheckBoxes,
          state.selectedComfortCheckBoxes,
          newSelectedType,
          state.selectedBannerCheckBoxes,
          {
            currentSale: state.currentSaleBannerKeyList,
            otherKeys: state.bannerMasterKeyList,
          }
        ),
      };
    }
    case "brand":
      newBrandCheckBoxes = [...state.brandCheckBoxes];
      newBrandCheckBoxes[action.index].checked = action.checked;
      newSelectedBrand = filterSelected(
        state.selectedBrandCheckBoxes,
        action.value
      );
      if (state.multipleHeaders === true) {
        if (newSelectedBrand.length === 0 || newSelectedBrand.length >= 2) {
          newCurrentHeader = state.headers.all;
        } else {
          newCurrentHeader = state.headers[newSelectedBrand[0]];
        }
      }
      if (state.queryString === true) {
        allfitersEmpty =
          newSelectedBrand.length === 0 &&
          state.selectedComfortCheckBoxes.length === 0 &&
          state.selectedTypeCheckBoxes.length === 0 &&
          state.selectedBannerCheckBoxes.length === 0;
        navigate(
          `/brands/list${allfitersEmpty ? "" : "?"}${queryString.stringify(
            {
              brand: newSelectedBrand,
              comfort: state.selectedComfortCheckBoxes,
              type: state.selectedTypeCheckBoxes,
              banner: state.selectedBannerCheckBoxes,
            },
            { arrayFormat: "comma" }
          )}`
        );
      }
      return {
        ...state,
        currentMattresses: filterCurrentMattresses(
          state.beforeFilterMattresses,
          newSelectedBrand,
          state.selectedComfortCheckBoxes,
          state.selectedTypeCheckBoxes,
          state.selectedBannerCheckBoxes,
          {
            currentSale: state.currentSaleBannerKeyList,
            otherKeys: state.bannerMasterKeyList,
          }
        ),
        brandCheckBoxes: newBrandCheckBoxes,
        selectedBrandCheckBoxes: newSelectedBrand,
        currentHeader: state.multipleHeaders
          ? newCurrentHeader
          : state.currentHeader,
      };
    case "comfort":
      newComfortCheckBoxes = [...state.comfortCheckBoxes];
      newComfortCheckBoxes[action.index].checked = action.checked;

      newComfortNumbers = filterSelected(
        state.selectedComfortCheckBoxes,
        action.id
      );
      if (state.queryString === true) {
        allfitersEmpty =
          state.selectedBrandCheckBoxes.length === 0 &&
          newComfortNumbers.length === 0 &&
          state.selectedTypeCheckBoxes.length === 0 &&
          state.selectedBannerCheckBoxes.length === 0;
        navigate(
          `/brands/list${allfitersEmpty ? "" : "?"}${queryString.stringify(
            {
              brand: state.selectedBrandCheckBoxes,
              comfort: newComfortNumbers,
              type: state.selectedTypeCheckBoxes,
              banner: state.selectedBannerCheckBoxes,
            },
            { arrayFormat: "comma" }
          )}`
        );
      }
      return {
        ...state,
        comfortCheckBoxes: newComfortCheckBoxes,
        currentMattresses: filterCurrentMattresses(
          state.beforeFilterMattresses,
          state.selectedBrandCheckBoxes,
          newComfortNumbers,
          state.selectedTypeCheckBoxes,
          state.selectedBannerCheckBoxes,
          {
            currentSale: state.currentSaleBannerKeyList,
            otherKeys: state.bannerMasterKeyList,
          }
        ),
        selectedComfortCheckBoxes: newComfortNumbers,
      };
    default:
      throw new Error();
  }
}
