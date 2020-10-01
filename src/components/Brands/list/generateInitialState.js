const GenerateInitialState = (location, data) => {
  const initialState = {
    mattresses: [],
    currentHeader: {},
    brandCb: [],
    selectedBrandCb: [],
    comfortCb: [],
    selectedComfortCb: [],
  };
  // const bloa = [
  //   {
  //     value: "sealy", checked: false,
  //   }
  // ]
  const params = new URLSearchParams(location.search);
  const brand = params.get("brand");
  const comfort = params.get("comfort");

  return [location, data];
};

export default GenerateInitialState;
