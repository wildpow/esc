const availableInColor = (title, current) => {
  if (!title.includes("Black") && title !== "Grey A.T.R.") return false;
  return current;
};
const xChairReducer = (state, action) => {
  let newWheelsCB;
  let newModelCB;
  let newColorCB;
  switch (action.type) {
    case "color":
      newColorCB = Array(state.colorCB.length).fill(false);
      newColorCB[action.index] = true;
      return {
        ...state,
        width: availableInColor(action.title, state.width),
        foam: !action.title.includes("Black") && false,
        activeColor: action.title,
        colorCB: newColorCB,
      };
    case "foam":
      return {
        ...state,
        foam: !state.foam,
      };
    case "width":
      return {
        ...state,
        width: !state.width,
      };
    case "model":
      newModelCB = [false, false, false];
      newModelCB[action.index] = true;
      return {
        ...state,
        modelCB: newModelCB,
      };
    case "headrest":
      return {
        ...state,
        activeHeadrest: !state.headrest ? "headrest" : "default",
        headrest: !state.headrest,
      };
    case "wheels":
      newWheelsCB = [false, false, false, false];
      newWheelsCB[action.index] = true;
      return {
        ...state,
        wheelsCB: newWheelsCB,
      };
    default:
      throw new Error();
  }
};

export default xChairReducer;
