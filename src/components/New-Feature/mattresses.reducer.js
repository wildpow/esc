import { navigate } from "gatsby";

const queryString = require("query-string");

function filterCurrentMattresses(mattresses, brands, comfort, type) {
  let newMattresses = mattresses;
  if (brands.length === 0 && comfort.length === 0 && type.length === 0) {
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
  return newMattresses;
}
export default function reducer(state, action) {
  let newComfortNumbers;
  let newComfortCheckBoxes;
  let newBrandCheckBoxes;
  let newTypeCheckBoxes;
  let newSelectedType;
  let newSelectedBrand;
  let newCurrentHeader;
  let allfitersEmpty;
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
    case "type": {
      newTypeCheckBoxes = [...state.typeCheckBoxes];
      newTypeCheckBoxes[action.index].checked = action.checked;
      newSelectedType = [...state.selectedTypeCheckBoxes];
      if (newSelectedType.includes(action.value)) {
        newSelectedType = newSelectedType.filter(
          (item) => item !== action.value
        );
      } else {
        newSelectedType.push(action.value);
      }
      allfitersEmpty =
        state.selectedBrandCheckBoxes.length === 0 &&
        state.selectedComfortCheckBoxes.length === 0 &&
        newSelectedType.length === 0;
      navigate(
        `/brands/new-list${allfitersEmpty ? "" : "?"}${queryString.stringify(
          {
            brand: state.selectedBrandCheckBoxes,
            comfort: state.selectedComfortCheckBoxes,
            type: newSelectedType,
          },
          { arrayFormat: "comma" }
        )}`
      );
      return {
        ...state,
        selectedTypeCheckBoxes: newSelectedType,
        typeCheckBoxes: newTypeCheckBoxes,
        currentMattresses: filterCurrentMattresses(
          state.beforeFilterMattresses,
          state.selectedBrandCheckBoxes,
          state.selectedComfortCheckBoxes,
          newSelectedType
        ),
      };
    }
    case "brand":
      newBrandCheckBoxes = [...state.brandCheckBoxes];
      newBrandCheckBoxes[action.index].checked = action.checked;
      newSelectedBrand = [...state.selectedBrandCheckBoxes];
      if (newSelectedBrand.includes(action.value)) {
        newSelectedBrand = newSelectedBrand.filter(
          (item) => item !== action.value
        );
      } else {
        newSelectedBrand.push(action.value);
      }
      if (newSelectedBrand.length === 0 || newSelectedBrand.length >= 2) {
        newCurrentHeader = state.headers.all;
      } else {
        newCurrentHeader = state.headers[newSelectedBrand[0]];
      }
      allfitersEmpty =
        newSelectedBrand.length === 0 &&
        state.selectedComfortCheckBoxes.length === 0 &&
        state.selectedTypeCheckBoxes.length === 0;
      navigate(
        `/brands/new-list${allfitersEmpty ? "" : "?"}${queryString.stringify(
          { brand: newSelectedBrand, comfort: state.selectedComfortCheckBoxes },
          { arrayFormat: "comma" }
        )}`
      );
      return {
        ...state,
        currentMattresses: filterCurrentMattresses(
          state.beforeFilterMattresses,
          newSelectedBrand,
          state.selectedComfortCheckBoxes,
          state.selectedTypeCheckBoxes
        ),
        brandCheckBoxes: newBrandCheckBoxes,
        selectedBrandCheckBoxes: newSelectedBrand,
        currentHeader: newCurrentHeader,
      };
    case "comfort":
      newComfortCheckBoxes = [...state.comfortCheckBoxes];
      newComfortCheckBoxes[action.index].checked = action.checked;

      newComfortNumbers = [...state.selectedComfortCheckBoxes];
      if (newComfortNumbers.includes(action.id)) {
        newComfortNumbers = newComfortNumbers.filter(
          (item) => item !== action.id
        );
      } else {
        newComfortNumbers.push(action.id);
      }
      allfitersEmpty =
        state.selectedBrandCheckBoxes.length === 0 &&
        newComfortNumbers.length === 0 &&
        state.selectedTypeCheckBoxes.length === 0;
      navigate(
        `/brands/new-list${allfitersEmpty ? "" : "?"}${queryString.stringify(
          { brand: state.selectedBrandCheckBoxes, comfort: newComfortNumbers },
          { arrayFormat: "comma" }
        )}`
      );
      return {
        ...state,
        comfortCheckBoxes: newComfortCheckBoxes,
        currentMattresses: filterCurrentMattresses(
          state.beforeFilterMattresses,
          state.selectedBrandCheckBoxes,
          newComfortNumbers,
          state.selectedTypeCheckBoxes
        ),
        selectedComfortCheckBoxes: newComfortNumbers,
      };
    default:
      throw new Error();
  }
}
