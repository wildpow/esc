const xChairReducer = (state, action) => {
  switch (action.type) {
    case "headrest":
      return {
        ...state,
        headrest: !state.headrest,
      };
    default:
      throw new Error();
  }
};

export default xChairReducer;
