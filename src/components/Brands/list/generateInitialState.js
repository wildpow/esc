const GenerateInitialState = (location, data) => {
  const initialState = {
    currentMattresses: [],
    beforeFilterMattresses: [],
    currentHeader: {},
    brandCheckBoxes: [
      { urlParam: "beautyrest", checked: false, displayName: "Beautyrest" },
      { urlParam: "nectar", checked: false, displayName: "Nectar" },
      { urlParam: "posh", checked: false, displayName: "Posh + Lavish" },
      { urlParam: "sealy", checked: false, displayName: "Sealy" },
      { urlParam: "serta", checked: false, displayName: "Serta" },
      { urlParam: "sterns", checked: false, displayName: "Stearns & Foster" },
      { urlParam: "tempurpedic", checked: false, displayName: "Tempur-PEDIC" },
    ],
    selectedBrandCheckBoxes: [],
    comfortCheckBoxes: [
      { id: 0, displayName: "Extra Firm", firmness: 1, urlParam: "extrafirm" },
      { id: 1, displayName: "Firm", firmness: 2, urlParam: "firm" },
      { id: 2, displayName: "Medium", firmness: 3, urlParam: "medium" },
      { id: 3, displayName: "Plush", firmness: 4, urlParam: "plush" },
      {
        id: 4,
        displayName: "Ultra Plush",
        firmness: 5,
        urlParam: "ultraplush",
      },
    ],
    selectedComfortCheckBoxes: [],
  };
  const params = new URLSearchParams(location.search);
  const brand = params.get("brand");
  const comfort = params.get("comfort");
  if (brand === null && comfort === null) {
    initialState.currentHeader = data.all.header;
    initialState.currentMattresses = data.all.mattresses;
    initialState.beforeFilterMattresses = data.all.mattresses;
    if (typeof window !== `undefined`) {
      window.history.replaceState({}, "", `${location.pathname}`);
    }
  } else if (brand !== null && comfort === null) {
    console.log("stuff");
  } else if (brand === null && comfort !== null) {
    console.log("stuff");
  }

  return initialState;
};

export default GenerateInitialState;
