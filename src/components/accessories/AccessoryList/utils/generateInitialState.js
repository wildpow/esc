/* eslint-disable prefer-destructuring */
import accData from "./headerData";

const GenerateInitialState = (location, pillows, sheets, protectors) => {
  const initialState = {
    acc: [],
    accInfo: accData,
    selectedAccInfo: {},
    typeCheckBoxs: [],
    selectedTypes: [],
    accBeforeFilter: [...sheets, ...protectors, ...pillows],
    locationPath: location.pathname,
  };

  const params = new URLSearchParams(location.search);
  const type = params.get("type");

  if (type === null) {
    initialState.selectedAccInfo = initialState.accInfo[3];
    initialState.typeCheckBoxs = [
      { value: "Sheets", checked: false, displayName: "Sheets" },
      { value: "Pillow", checked: false, displayName: "Pillows" },
      { value: "Protector", checked: false, displayName: "Protectors" },
    ];
    window.history.replaceState({}, "", `${location.pathname}`);
    initialState.acc = initialState.accBeforeFilter;
  } else if (type.toLowerCase() === "sheets") {
    initialState.selectedAccInfo = initialState.accInfo[0];
    initialState.typeCheckBoxs = [
      { value: "Sheets", checked: true, displayName: "Sheets" },
      { value: "Pillow", checked: false, displayName: "Pillows" },
      { value: "Protector", checked: false, displayName: "Protectors" },
    ];
    initialState.acc = sheets;
    initialState.selectedTypes.push("Sheets");
  } else if (type.toLowerCase() === "pillow") {
    initialState.selectedAccInfo = initialState.accInfo[1];
    initialState.typeCheckBoxs = [
      { value: "Sheets", checked: false, displayName: "Sheets" },
      { value: "Pillow", checked: true, displayName: "Pillows" },
      { value: "Protector", checked: false, displayName: "Protectors" },
    ];
    initialState.acc = pillows;
    initialState.selectedTypes.push("Pillow");
  } else if (type.toLowerCase() === "protector") {
    initialState.selectedAccInfo = initialState.accInfo[2];
    initialState.typeCheckBoxs = [
      { value: "Sheets", checked: false, displayName: "Sheets" },
      { value: "Pillow", checked: false, displayName: "Pillows" },
      { value: "Protector", checked: true, displayName: "Protectors" },
    ];
    initialState.acc = protectors.nodes;
    initialState.selectedTypes.push("Protector");
  } else {
    initialState.selectedAccInfo = initialState.accInfo[3];
    initialState.typeCheckBoxs = [
      { value: "Sheets", checked: false, displayName: "Sheets" },
      { value: "Pillow", checked: false, displayName: "Pillows" },
      { value: "Protector", checked: false, displayName: "Protectors" },
    ];
    window.history.replaceState({}, "", `${location.pathname}`);
    initialState.acc = initialState.accBeforeFilter;
  }
  return initialState;
};

export default GenerateInitialState;
