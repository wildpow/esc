const availableInColor = (title, current) => {
  if (!title.includes("Black") && title !== "Grey A.T.R.") return 0;
  return current;
};
const calculatePrice = (...args) =>
  args.reduce((a, b) => Number(a) + Number(b));

const xChairReducer = (state, action) => {
  let newWheelsCB;
  let newModelCB;
  let newColorCB;
  let newBool;
  let newWidth;
  let newFoam;
  let newHeadrest;
  switch (action.type) {
    case "color":
      newColorCB = Array(state.colorCB.length).fill(false);
      newColorCB[action.index] = true;
      newWidth = availableInColor(action.title, state.width);
      newFoam = action.title.includes("Black") ? state.foam : 0;
      return {
        ...state,
        width: newWidth,
        foam: newFoam,
        activeColor: action.title,
        activeChairIndex: action.index,
        colorCB: newColorCB,
        price: calculatePrice(
          state.chairVariants[action.index].price,
          newWidth,
          state.headrest,
          newFoam
        ),
        compareAtPrice: calculatePrice(
          state.chairVariants[action.index].compareAtPrice,
          newWidth,
          state.headrest,
          newFoam
        ),
      };
    case "foam":
      newBool = !state.foam;
      newFoam = newBool ? action.price : 0;
      return {
        ...state,
        foam: newFoam,
        price: calculatePrice(
          state.chairVariants[state.activeChairIndex].price,
          newFoam,
          state.width,
          state.headrest
        ),
        compareAtPrice: calculatePrice(
          state.chairVariants[state.activeChairIndex].compareAtPrice,
          newFoam,
          state.width,
          state.headrest
        ),
      };
    case "width":
      newBool = !state.width;
      newWidth = newBool ? action.price : 0;
      return {
        ...state,
        width: newWidth,
        price: calculatePrice(
          state.chairVariants[state.activeChairIndex].price,
          newWidth,
          state.foam,
          state.headrest
        ),
        compareAtPrice: calculatePrice(
          state.chairVariants[state.activeChairIndex].compareAtPrice,
          newWidth,
          state.foam,
          state.headrest
        ),
      };
    case "model":
      newModelCB = [false, false, false];
      newModelCB[action.index] = true;
      return {
        ...state,
        modelCB: newModelCB,
      };
    case "headrest":
      newBool = !state.headrest;
      newHeadrest = newBool ? action.price : 0;
      return {
        ...state,
        activeHeadrest: newBool ? "headrest" : "default",
        headrest: newHeadrest,
        price: calculatePrice(
          state.chairVariants[state.activeChairIndex].price,
          newHeadrest,
          state.foam,
          state.width
        ),
        compareAtPrice: calculatePrice(
          state.chairVariants[state.activeChairIndex].compareAtPrice,
          newHeadrest,
          state.foam,
          state.width
        ),
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
