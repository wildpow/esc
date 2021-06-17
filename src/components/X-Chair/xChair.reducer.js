const xChairReducer = (state, action) => {
  let newWheelsCB;
  switch (action.type) {
    case "headrest":
      return {
        ...state,
        headrest: !state.headrest,
      };
    case "wheels":
      console.log("action", action);
      newWheelsCB = [false, false, false, false];
      newWheelsCB[action.index] = true;
      console.log(newWheelsCB, "newWheelsCB");
      return {
        ...state,
        wheelsCB: newWheelsCB,
      };
    default:
      throw new Error();
  }
};

export default xChairReducer;
