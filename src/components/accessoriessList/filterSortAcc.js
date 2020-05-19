const filterSortReducer = (state, action) => {
  let newTypeCheckBoxs;
  let newAcc;
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
      newTypeCheckBoxs = [...state.typeCheckBoxs];
      newAcc = [...state.acc];
      newTypeCheckBoxs[action.index].checked = action.checked;
      newSelectedTypes = [...state.selectedTypes];
      if (newSelectedTypes.includes(action.value)) {
        newSelectedTypes = newSelectedTypes.filter(
          item => item !== action.value,
        );
      } else {
        newSelectedTypes.push(action.value);
      }
      return {
        ...state,
        acc:
          newSelectedTypes.length !== 0
            ? state.accBeforeFilter.filter(acc =>
                newSelectedTypes.includes(acc.productType),
              )
            : state.accBeforeFilter,

        typeCheckBoxs: newTypeCheckBoxs,
        selectedTypes: newSelectedTypes,
      };
    default:
      throw new Error();
  }
};

export default filterSortReducer;
