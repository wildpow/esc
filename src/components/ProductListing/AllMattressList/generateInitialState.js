const queryString = require("query-string");

const GenerateInitialState = (location, data, types, brandData) => {
  // /////////
  const { brandState, brandNames } = brandData;
  // ////////
  const query = queryString.parse(location.search.toLowerCase(), {
    arrayFormat: "comma",
  });

  const initialState = {
    ...types,
    currentMattresses: [],
    beforeFilterMattresses: data.all.mattresses,
    currentHeader: data.all.header,
    brandCheckBoxes: brandState.brandCheckBoxes,
    selectedBrandCheckBoxes: brandState.selectedBrandCheckBoxes,
    comfortCheckBoxes: [
      {
        id: 0,
        displayName: "Extra Firm",
        firmness: 1,
        urlParam: "extrafirm",
        checked: false,
      },
      {
        id: 1,
        displayName: "Firm",
        firmness: 2,
        urlParam: "firm",
        checked: false,
      },
      {
        id: 2,
        displayName: "Medium",
        firmness: 3,
        urlParam: "medium",
        checked: false,
      },
      {
        id: 3,
        displayName: "Plush",
        firmness: 4,
        urlParam: "plush",
        checked: false,
      },
      {
        id: 4,
        displayName: "Ultra Plush",
        firmness: 5,
        urlParam: "ultraplush",
        checked: false,
      },
    ],
    selectedComfortCheckBoxes: [],
    headers: {
      sealy: data.sealy.header,
      beautyrest: data.beautyrest.header,
      tempurpedic: data.tempurpedic.header,
      serta: data.serta.header,
      stearns: data.stearns.header,
      nectar: data.nectar.header,
      "posh-and-lavish": data["posh-and-lavish"].header,
      "mattress-america": data["mattress-america"].header,
      all: data.all.header,
    },
    locationPath: location.pathname,
  };
  const filterComfortQuery = (arr) => {
    const isItAnArray = typeof arr === "string" ? [arr] : arr;
    const comfortIndex = ["1", "2", "3", "4", "5"];
    const resault = [];
    isItAnArray.forEach((a) =>
      comfortIndex.forEach((c) => {
        if (a === c) resault.push(c);
      })
    );
    // return comfortIndex.filter((index) => arr.includes(index)).map(Number);
    return resault.map(Number);
  };
  const filterBadQueryInputs = (originalQuery, keys) => {
    const results = [];
    const isQueryAnArray =
      typeof originalQuery === "string" ? [originalQuery] : originalQuery;
    isQueryAnArray.forEach((a) =>
      keys.forEach((b) => {
        if (a === b) results.push(b);
      })
    );
    return results;
  };

  // const filterBrandQuery = (arr) => {
  //   const resault = [];
  //   const isItAnArray = typeof arr === "string" ? [arr] : arr;
  //   const brands = [
  //     "sealy",
  //     "beautyrest",
  //     "tempurpedic",
  //     "serta",
  //     "stearns",
  //     "nectar",
  //     "posh-and-lavish",
  //     "mattress-america",
  //   ];
  //   isItAnArray.forEach((a) =>
  //     brands.forEach((b) => {
  //       if (a === b) resault.push(b);
  //     })
  //   );
  //   // return brands.filter((brand) => arr.includes(brand));
  //   return resault;
  // };
  const filterTypeQuery = (arr) => {
    const resault = [];
    const isItAnArray = typeof arr === "string" ? [arr] : arr;
    const currentTypes = ["latex", "inner-spring", "memory-foam", "hybrid"];
    isItAnArray.forEach((a) =>
      currentTypes.forEach((b) => {
        if (a === b) resault.push(b);
      })
    );
    // return brands.filter((brand) => arr.includes(brand));
    return resault;
  };
  const allMattresses = () => {
    initialState.currentHeader = data.all.header;
    initialState.currentMattresses = data.all.mattresses;
    if (typeof window !== `undefined`) {
      window.history.replaceState({}, "", `${location.pathname}`);
    }
  };
  let filteredComfortQuery = null;
  let filteredBrandQuery = null;
  const filteredTypeQuery = null;
  // Build state for all mattress query conditions
  if (
    Object.entries(query).length === 0 ||
    (query.brand === undefined && query.comfort === undefined) ||
    (query.brand === null && query.comfort === null) ||
    (query.brand === undefined && query.comfort === null) ||
    (query.brand === null && query.comfort === undefined)
  ) {
    allMattresses();
    return initialState;
  }
  // TODO working on type query building
  // if(query.type) {
  //   filteredTypeQuery = filterTypeQuery(query.type);
  //   if(filteredTypeQuery.length > 0) {

  //   }
  // }
  // _____________________________

  // build state for brand query
  const newBrandCBState = [...initialState.brandCheckBoxes];
  if (query.brand) {
    filteredBrandQuery = filterBadQueryInputs(query.brand, brandNames);
    if (filteredBrandQuery.length === 1) {
      initialState.currentMattresses = data[filteredBrandQuery[0]].mattresses;
      initialState.currentHeader = data[filteredBrandQuery[0]].header;
      initialState.selectedBrandCheckBoxes.push(filteredBrandQuery[0]);
      newBrandCBState[brandNames.indexOf(filteredBrandQuery[0])].checked = true;
      // initialState.brandCheckBoxes[
      //   data[filteredBrandQuery[0]].checkBoxIndex
      // ].checked = true;
      initialState.brandCheckBoxes = newBrandCBState;
    } else {
      initialState.currentMattresses = data.all.mattresses.filter((matt) =>
        filteredBrandQuery.includes(matt.brand.urlName)
      );
      initialState.currentHeader = data.all.header;
      filteredBrandQuery.forEach((q) => {
        initialState.brandCheckBoxes[data[q].checkBoxIndex].checked = true;
      });
    }
  }

  // build state for comfort query
  if (query.comfort) {
    filteredComfortQuery = filterComfortQuery(query.comfort);
    if (filteredComfortQuery.length > 0) {
      const filteredMatts =
        initialState.currentMattresses.length === 0
          ? data.all.mattresses
          : initialState.currentMattresses;

      initialState.selectedComfortCheckBoxes = [...filteredComfortQuery];
      filteredComfortQuery.forEach((elm) => {
        initialState.comfortCheckBoxes[elm - 1].checked = true;
      });
      initialState.currentMattresses = filteredMatts.filter((a) =>
        filteredComfortQuery.includes(a.firmness)
      );
    }
  }

  // Build Query String
  const qStringResault = {};
  if (filteredComfortQuery !== null) {
    if (filteredComfortQuery.length !== 0) {
      qStringResault.comfort = filteredComfortQuery;
    }
  }
  if (filteredBrandQuery !== null) {
    if (filteredBrandQuery.length !== 0) {
      qStringResault.brand = filteredBrandQuery;
    }
  }
  if (Object.keys(qStringResault).length === 0) {
    allMattresses();
  } else {
    // eslint-disable-next-line no-lonely-if
    if (typeof window !== `undefined`) {
      window.history.replaceState(
        {},
        "",
        `/brands/list?${queryString.stringify(qStringResault, {
          arrayFormat: "comma",
        })}`
      );
    }
  }
  return initialState;
};

export default GenerateInitialState;
