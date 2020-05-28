const filterSortReducer = (state, action) => {
  let newTypeCheckBoxs;
  let newInfo;
  let newSelectedTypes;
  switch (action.type) {
    case "low-high":
      return {
        ...state,
        acc: [...state.acc].sort(
          (a, b) =>
            a.priceRange.minVariantPrice.amount -
            b.priceRange.minVariantPrice.amount,
        ),
        accBeforeFilter: [...state.accBeforeFilter].sort(
          (a, b) =>
            a.priceRange.minVariantPrice.amount -
            b.priceRange.minVariantPrice.amount,
        ),
      };
    case "high-low":
      return {
        ...state,
        acc: [...state.acc].sort(
          (a, b) =>
            b.priceRange.minVariantPrice.amount -
            a.priceRange.minVariantPrice.amount,
        ),
        accBeforeFilter: [...state.accBeforeFilter].sort(
          (a, b) =>
            b.priceRange.minVariantPrice.amount -
            a.priceRange.minVariantPrice.amount,
        ),
      };
    case "name a-z":
      return {
        ...state,
        acc: [...state.acc].sort((a, b) => {
          const nameA = a.title;
          const nameB = b.title;
          return nameA > nameB ? 1 : -1;
        }),
        accBeforeFilter: [...state.accBeforeFilter].sort((a, b) => {
          const nameA = a.title;
          const nameB = b.title;
          return nameA > nameB ? 1 : -1;
        }),
      };
    case "name z-a":
      return {
        ...state,
        acc: [...state.acc].sort((a, b) => {
          const nameA = a.title;
          const nameB = b.title;
          return nameA > nameB ? -1 : 1;
        }),
        accBeforeFilter: [...state.accBeforeFilter].sort((a, b) => {
          const nameA = a.title;
          const nameB = b.title;
          return nameA > nameB ? -1 : 1;
        }),
      };
    case "type":
      newInfo = state.selectedAccInfo;
      newTypeCheckBoxs = [...state.typeCheckBoxs];
      newTypeCheckBoxs[action.index].checked = action.checked;
      newSelectedTypes = [...state.selectedTypes];
      if (newSelectedTypes.includes(action.value)) {
        newSelectedTypes = newSelectedTypes.filter(
          (item) => item !== action.value,
        );
      } else {
        newSelectedTypes.push(action.value);
      }

      if (newSelectedTypes.length !== 1) {
        newInfo = state.accInfo[3];
        window.history.replaceState({}, "", `${state.locationPath}`);
      } else {
        newInfo = state.accInfo[action.index];
        window.history.replaceState(
          {},
          "",
          `${state.locationPath}?type=${newSelectedTypes[0].toLowerCase()}`,
        );
      }
      return {
        ...state,
        acc:
          newSelectedTypes.length !== 0
            ? state.accBeforeFilter.filter((acc) =>
                newSelectedTypes.includes(acc.productType),
              )
            : state.accBeforeFilter,
        selectedAccInfo: newInfo,
        typeCheckBoxs: newTypeCheckBoxs,
        selectedTypes: newSelectedTypes,
      };
    default:
      throw new Error();
  }
};

export default filterSortReducer;
