const queryString = require("query-string");

const GenerateInitialState = (location, data) => {
  // const query = queryString.parse(location.search);
  const query = queryString.parse(location.search.toLowerCase(), {
    arrayFormat: "comma",
  });
  const initialState = {
    currentMattresses: [],
    beforeFilterMattresses: [],
    currentHeader: {},
    brandCheckBoxes: [
      { urlParam: "sealy", checked: false, displayName: "Sealy" },
      { urlParam: "beautyrest", checked: false, displayName: "Beautyrest" },
      { urlParam: "tempurpedic", checked: false, displayName: "Tempur-PEDIC" },
      { urlParam: "serta", checked: false, displayName: "Serta" },
      { urlParam: "stearns", checked: false, displayName: "Stearns & Foster" },
      { urlParam: "nectar", checked: false, displayName: "Nectar" },
      {
        urlParam: "posh-and-lavish",
        checked: false,
        displayName: "Posh + Lavish",
      },
    ],
    selectedBrandCheckBoxes: [],
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
      "posh-and-lavish": data.posh.header,
      all: data.all.header,
    },
  };
  if (Object.entries(query).length === 0) {
    initialState.currentHeader = data.all.header;
    initialState.currentMattresses = data.all.mattresses;
    initialState.beforeFilterMattresses = data.all.mattresses;
    if (typeof window !== `undefined`) {
      window.history.replaceState({}, "", `${location.pathname}`);
    }
    return initialState;
  }
  if (query.brand === undefined && query.comfort === undefined) {
    initialState.currentHeader = data.all.header;
    initialState.currentMattresses = data.all.mattresses;
    initialState.beforeFilterMattresses = data.all.mattresses;
    if (typeof window !== `undefined`) {
      window.history.replaceState({}, "", `${location.pathname}`);
    }
    return initialState;
  }
  if (query.brand === null && query.comfort === null) {
    initialState.currentHeader = data.all.header;
    initialState.currentMattresses = data.all.mattresses;
    initialState.beforeFilterMattresses = data.all.mattresses;
    if (typeof window !== `undefined`) {
      window.history.replaceState({}, "", `${location.pathname}`);
    }
    return initialState;
  }
  if (query.brand) {
    let filteredMattresses = [];
    if (typeof query.brand === "string") {
      if (data[query.brand] !== undefined) {
        filteredMattresses = [
          ...filteredMattresses,
          ...data[query.brand].mattresses,
        ];
        initialState.selectedBrandCheckBoxes.push(query.brand);
        initialState.brandCheckBoxes[
          data[query.brand].checkBoxIndex
        ].checked = true;
      } else {
        filteredMattresses = data.all.mattresses;
      }
    } else {
      query.brand.forEach((elm) => {
        if (data[elm] !== undefined) {
          filteredMattresses = [...filteredMattresses, ...data[elm].mattresses];
          initialState.selectedBrandCheckBoxes.push(elm);
          initialState.brandCheckBoxes[data[elm].checkBoxIndex].checked = true;
        }
      });
    }
    initialState.currentHeader =
      initialState.selectedBrandCheckBoxes.length === 1
        ? data[initialState.selectedBrandCheckBoxes[0]].header
        : data.all.header;
    initialState.currentMattresses = filteredMattresses;
    initialState.beforeFilterMattresses = filteredMattresses;
  }
  if (query.comfort) {
    const comfortNums = [];
    let filteredMatts =
      initialState.currentMattresses.length === 0
        ? data.all.mattresses
        : initialState.currentMattresses;
    if (typeof query.comfort !== "string") {
      query.comfort.forEach((elm) => {
        if (1 + elm !== NaN) {
          if (Number(elm) < 5 || Number(elm) === 0) {
            initialState.comfortCheckBoxes[elm].checked = true;
            comfortNums.push(Number(elm));
          }
        }
      });
    }
    if (Number(query.comfort) < 5 || Number(query.comfort) === 0) {
      initialState.comfortCheckBoxes[Number(query.comfort)].checked = true;
      comfortNums.push(Number(query.comfort));
    }
    filteredMatts =
      comfortNums.length === 0 && initialState.currentMattresses.length === 0
        ? [...data.all.mattresses]
        : [
            ...filteredMatts.filter(
              (a) => comfortNums.includes(a.firmness) === true,
            ),
          ];
    initialState.currentMattresses = filteredMatts;
    initialState.beforeFilterMattresses = filteredMatts;
    initialState.currentHeader =
      Object.entries(initialState.currentHeader).length === 0
        ? data.all.header
        : initialState.currentHeader;
  }
  return initialState;
};

export default GenerateInitialState;
