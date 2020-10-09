// import { navigate } from "gatsby";

const queryString = require("query-string");

const GenerateInitialState = (location, data) => {
  // const query = queryString.parse(location.search);
  const query = queryString.parse(location.search.toLowerCase(), {
    arrayFormat: "comma",
  });
  const initialState = {
    currentMattresses: [],
    beforeFilterMattresses: data.all.mattresses,
    currentHeader: data.all.header,
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
      "posh-and-lavish": data["posh-and-lavish"].header,
      all: data.all.header,
    },
    locationPath: location.pathname,
  };
  const filterComfortQuery = (arr) => {
    const comfortIndex = ["1", "2", "3", "4", "5"];
    return comfortIndex.filter((index) => arr.includes(index)).map(Number);
  };
  const filterBrandQuery = (arr) => {
    const brands = [
      "sealy",
      "beautyrest",
      " tempurpedic",
      "serta",
      "stearns",
      "nectar",
      "posh-and-lavish",
    ];
    return brands.filter((brand) => arr.includes(brand));
  };
  const allMattresses = () => {
    initialState.currentHeader = data.all.header;
    initialState.currentMattresses = data.all.mattresses;
    // if (typeof window !== `undefined`) {
    //   window.history.replaceState({}, "", `${location.pathname}`);
    // }
  };
  let filteredComfortQuery = null;
  let filteredBrandQuery = null;
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
  if (query.brand) {
    filteredBrandQuery = filterBrandQuery(query.brand);
    // TODO Delete this line once done
    if (filteredBrandQuery.length === 0) allMattresses();
    // !!!!!!!!!!!!!!!!!!!!!TODO !!!!!!!!!!!!!!!!!
    if (filteredBrandQuery.length === 1) {
      initialState.currentMattresses = data[filteredBrandQuery[0]].mattresses;
      initialState.currentHeader = data[filteredBrandQuery[0]].header;
      initialState.selectedBrandCheckBoxes.push(filteredBrandQuery[0]);
      initialState.brandCheckBoxes[
        data[filteredBrandQuery[0]].checkBoxIndex
      ].checked = true;
    } else {
      initialState.currentMattresses = data.all.mattresses.filter((matt) =>
        filteredBrandQuery.includes(matt.brand.urlName),
      );
      initialState.currentHeader = data.all.header;
      filteredBrandQuery.forEach((q) => {
        initialState.brandCheckBoxes[data[q].checkBoxIndex].checked = true;
      });
    }
  }

  if (query.comfort) {
    filteredComfortQuery = filterComfortQuery(query.comfort);
    if (filteredComfortQuery.length === 0) allMattresses();
    if (filteredComfortQuery.length > 0) {
      allMattresses(); // TODO REMOVE!!!!!!!!!!!
      const filteredMatts =
        initialState.currentMattresses.length === 0
          ? data.all.mattresses
          : initialState.currentMattresses;
      // TODO PROBLEM!!!!!! resaults of query string and checkboxs don't match when you have more then one item in the comfort query

      // console.log("!!!", filteredComfortQuery, filteredMatts);
      // initialState.selectedComfortCheckBoxes = [...filteredComfortQuery];
      // filteredComfortQuery.forEach((elm) => {
      //   console.log(elm, initialState.comfortCheckBoxes[elm]);
      //   // initialState.comfortCheckBoxes[elm].checked = true;
      // });
      initialState.currentMattresses = filteredMatts.filter((a) =>
        filteredComfortQuery.includes(a.firmness),
      );
    }

    if (filteredBrandQuery !== null && filteredBrandQuery !== null) {
      queryString.stringify(
        { brand: filteredBrandQuery, comfort: filteredBrandQuery },
        { arrayFormat: "comma" },
      );
      if (typeof window !== `undefined`) {
        window.history.replaceState(
          {},
          "",
          `${location.locationPath}?${queryString.stringify(
            { brand: filteredBrandQuery, comfort: filteredBrandQuery },
            { arrayFormat: "comma" },
          )}`,
        );
      }
    } else if (filteredBrandQuery === null && filteredBrandQuery !== null) {
      if (typeof window !== `undefined`) {
        window.history.replaceState(
          {},
          "",
          `${location.locationPath}?${queryString.stringify(
            { comfort: filteredBrandQuery },
            { arrayFormat: "comma" },
          )}`,
        );
      }
    } else if (filteredBrandQuery !== null && filteredBrandQuery === null) {
      if (typeof window !== `undefined`) {
        window.history.replaceState(
          {},
          "",
          `${location.locationPath}?${queryString.stringify(
            { brand: filteredBrandQuery },
            { arrayFormat: "comma" },
          )}`,
        );
      }
    }
    // console.log(
    //   queryString.stringify(
    //     { comfort: filteredComfortQuery },
    //     { arrayFormat: "comma" },
    //   ),
    // );
    // `${state.locationPath}?${queryString.stringify(
    //   { brand: newSelectedBrand, comfort: state.selectedComfortCheckBoxes },
    //   { arrayFormat: "comma" },
    // )}`,
  }
  return initialState;
};

export default GenerateInitialState;
