const filterSortReducer = (state, action) => {
  let newType;
  let newTag;
  let newVendor;
  let newAcc;
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
      newType = [...state.types];
      newAcc = [...state.acc];
      newType[action.index].checked = action.checked;
      // console.log(action, "sefewf", newAcc);
      return {
        ...state,
        acc: newAcc.filter(a => a.productType === action.value),
        type: newType,
      };
    case "tag":
      newTag = [...state.tags];
      if (newTag.includes(action.tag)) {
        newTag = newTag.filter(item => item !== action.tag);
      } else {
        newTag.push(action.tag);
      }
      return {
        ...state,
        acc:
          newTag.length !== 0
            ? state.accBeforeFilter.filter(acc => newTag.includes(acc.tags))
            : state.accBeforeFilter,
        tags: newTag,
      };
    case "vendor":
      newVendor = [...state.vendor];
      if (newType.includes(action.vendor)) {
        newVendor = newVendor.filter(item => item !== action.vendor);
      } else {
        newVendor.push(action.vendor);
      }
      return {
        ...state,
        acc:
          newVendor.length !== 0
            ? state.accBeforeFilter.filter(acc =>
                newVendor.includes(acc.vendor),
              )
            : state.accBeforeFilter,
        type: newVendor,
      };
    default:
      throw new Error();
  }
};

export default filterSortReducer;
