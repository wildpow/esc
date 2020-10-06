import { navigate } from "gatsby";

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
      if (newSelectedBrand.length === 0 || newSelectedBrand.length > 1) {
        newCurrentHeader = state.data.all.header;
      } else {
        newCurrentHeader = state.data[action.value].header;
      }
      return {
        ...state,
        currentMattresses:
          newSelectedBrand.length !== 0
            ? state.beforeFilterMattresses.filter((matt) =>
                newSelectedBrand.includes(matt.brand.urlName),
              )
            : state.beforeFilterMattresses,
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
        currentMattresses:
          newComfortNumbers.length !== 0
            ? state.beforeFilterMattresses.filter((matt) =>
                newComfortNumbers.includes(matt.firmness),
              )
            : state.beforeFilterMattresses,
        selectedComfortCheckBoxes: newComfortNumbers,
      };
    default:
      throw new Error();
  }
}
