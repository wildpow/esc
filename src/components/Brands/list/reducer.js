import { navigate } from "gatsby";

export default function (state, action) {
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
    default:
      throw new Error();
  }
}
