const filterSortReducer = (state, action) => {
  let newFirmnessNumbs;
  switch (action.type) {
    case "low-high":
      return {
        ...state,
        mattresses: [...state.mattresses].sort(
          (a, b) => a.priceLow - b.priceLow,
        ),
        beforeFilter: [...state.beforeFilter].sort(
          (a, b) => a.priceLow - b.priceLow,
        ),
      };
    case "high-low":
      return {
        ...state,
        mattresses: [...state.mattresses].sort(
          (a, b) => b.priceLow - a.priceLow,
        ),
        beforeFilter: [...state.beforeFilter].sort(
          (a, b) => b.priceLow - a.priceLow,
        ),
      };
    case "name a-z":
      return {
        ...state,
        mattresses: [...state.mattresses].sort((a, b) => {
          const nameA = `${a.subline.name} ${a.name}`;
          const nameB = `${b.subline.name} ${a.name}`;
          return nameA > nameB ? 1 : -1;
        }),
        beforeFilter: [...state.beforeFilter].sort((a, b) => {
          const nameA = `${a.subline.name} ${a.name}`;
          const nameB = `${b.subline.name} ${a.name}`;
          return nameA > nameB ? 1 : -1;
        }),
      };
    case "name z-a":
      return {
        ...state,
        mattresses: [...state.mattresses].sort((a, b) => {
          const nameA = `${a.subline.name} ${a.name}`;
          const nameB = `${b.subline.name} ${a.name}`;
          return nameA > nameB ? -1 : 1;
        }),
        beforeFilter: [...state.beforeFilter].sort((a, b) => {
          const nameA = `${a.subline.name} ${a.name}`;
          const nameB = `${b.subline.name} ${a.name}`;
          return nameA > nameB ? -1 : 1;
        }),
      };
    case "check":
      newFirmnessNumbs = [...state.firmnessNums];
      if (newFirmnessNumbs.includes(action.id)) {
        newFirmnessNumbs = newFirmnessNumbs.filter(
          (item) => item !== action.id,
        );
      } else {
        newFirmnessNumbs.push(action.id);
      }
      return {
        ...state,
        mattresses:
          newFirmnessNumbs.length !== 0
            ? state.beforeFilter.filter((matt) =>
                newFirmnessNumbs.includes(matt.firmness),
              )
            : state.beforeFilter,
        firmnessNums: newFirmnessNumbs,
      };
    default:
      throw new Error();
  }
};

export default filterSortReducer;
