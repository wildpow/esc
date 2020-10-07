import { navigate } from "gatsby";

function filterCurrentMattresses(mattresses, brands, comfort) {
  let newMattresses = mattresses;
  // console.log(mattresses, brands, comfort, "mattresses, brands, comfort");
  if (brands.length === 0 && comfort.length === 0) {
    // console.log("brands.length === 0 && comfort.length === 0");
    return mattresses;
  }
  if (brands.length >= 1) {
    // console.log("brands.length !== 0", brands.length);
    newMattresses = newMattresses.filter((matt) =>
      brands.includes(matt.brand.urlName),
    );
  }
  if (comfort.length >= 1) {
    // console.log("comfort !== 0", comfort.length, "KSKWKWKWKWKWKKWKWKKWKWK");
    newMattresses = newMattresses.filter((matt) =>
      comfort.includes(matt.firmness),
    );
  }
  // newMattresses.map((a) =>
  //   console.log(
  //     "!!!!!!!!!!!!!!!!!!!!!!!!!!!",
  //     a.firmness,
  //     a.brand.urlName,
  //     "!!!!!!!!!!!!!!!",
  //   ),
  // );
  // console.log("FINAL MATTRESSES", newMattresses);
  return newMattresses;
}
export default function (state, action) {
  let newComfortNumbers;
  let newBrandCheckBoxes;
  let newSelectedBrand;
  let newCurrentHeader;

  switch (action.type) {
    case "low-high":
      return {
        ...state,
        currentMattresses: [...state.currentMattresses].sort(
          (a, b) => a.priceLow - b.priceLow,
        ),
        beforeFilterMattresses: [...state.beforeFilterMattresses].sort(
          (a, b) => a.priceLow - b.priceLow,
        ),
      };
    case "high-low":
      return {
        ...state,
        currentMattresses: [...state.currentMattresses].sort(
          (a, b) => b.priceLow - a.priceLow,
        ),
        beforeFilterMattresses: [...state.beforeFilterMattresses].sort(
          (a, b) => b.priceLow - a.priceLow,
        ),
      };
    case "name a-z":
      return {
        ...state,
        currentMattresses: [...state.currentMattresses].sort((a, b) => {
          const nameA = `${a.subline.name} ${a.name}`;
          const nameB = `${b.subline.name} ${a.name}`;
          return nameA > nameB ? 1 : -1;
        }),
        beforeFilterMattresses: [...state.beforeFilterMattresses].sort(
          (a, b) => {
            const nameA = `${a.subline.name} ${a.name}`;
            const nameB = `${b.subline.name} ${a.name}`;
            return nameA > nameB ? 1 : -1;
          },
        ),
      };
    case "name z-a":
      return {
        ...state,
        currentMattresses: [...state.currentMattresses].sort((a, b) => {
          const nameA = `${a.subline.name} ${a.name}`;
          const nameB = `${b.subline.name} ${a.name}`;
          return nameA > nameB ? -1 : 1;
        }),
        beforeFilterMattresses: [...state.beforeFilterMattresses].sort(
          (a, b) => {
            const nameA = `${a.subline.name} ${a.name}`;
            const nameB = `${b.subline.name} ${a.name}`;
            return nameA > nameB ? -1 : 1;
          },
        ),
      };
    case "brand":
      newBrandCheckBoxes = [...state.brandCheckBoxes];
      newBrandCheckBoxes[action.index].checked = action.checked;
      newSelectedBrand = [...state.selectedBrandCheckBoxes];
      if (newSelectedBrand.includes(action.value)) {
        newSelectedBrand = newSelectedBrand.filter(
          (item) => item !== action.value,
        );
      } else {
        newSelectedBrand.push(action.value);
      }
      if (newSelectedBrand.length === 0 || newSelectedBrand.length >= 2) {
        newCurrentHeader = state.headers.all;
      } else {
        newCurrentHeader = state.headers[newSelectedBrand[0]];
      }
      // console.log(
      //   "!!!!!",
      //   action.value,
      //   newSelectedBrand,
      //   newSelectedBrand.length,
      //   "newSelectedBrand.length",
      // );
      // return {
      //   ...state,
      //   currentMattresses:
      //     newSelectedBrand.length !== 0
      //       ? state.beforeFilterMattresses.filter((matt) =>
      //           newSelectedBrand.includes(matt.brand.urlName),
      //         )
      //       : state.beforeFilterMattresses,
      //   brandCheckBoxes: newBrandCheckBoxes,
      //   selectedBrandCheckBoxes: newSelectedBrand,
      //   currentHeader: newCurrentHeader,
      // };
      return {
        ...state,
        currentMattresses: filterCurrentMattresses(
          state.beforeFilterMattresses,
          newSelectedBrand,
          state.selectedComfortCheckBoxes,
        ),
        // currentMattresses:
        //   newSelectedBrand.length !== 0
        //     ? state.currentMattresses.filter((matt) =>
        //         newSelectedBrand.includes(matt.brand.urlName),
        //       )
        //     : state.currentMattresses,
        brandCheckBoxes: newBrandCheckBoxes,
        selectedBrandCheckBoxes: newSelectedBrand,
        currentHeader: newCurrentHeader,
      };
    case "comfort":
      newComfortNumbers = [...state.selectedComfortCheckBoxes];
      if (newComfortNumbers.includes(action.id)) {
        newComfortNumbers = newComfortNumbers.filter(
          (item) => item !== action.id,
        );
      } else {
        newComfortNumbers.push(action.id);
      }
      return {
        ...state,
        currentMattresses: filterCurrentMattresses(
          state.beforeFilterMattresses,
          state.selectedBrandCheckBoxes,
          newComfortNumbers,
        ),
        selectedComfortCheckBoxes: newComfortNumbers,
      };
    default:
      throw new Error();
  }
}
