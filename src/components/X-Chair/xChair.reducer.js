const xChairReducer = (state, action) => {
  let newWheelsCB;
  let newModelCB;
  switch (action.type) {
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
