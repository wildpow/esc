const GenerateInitialState = (colorCB, activeColor) => {
  const initialState = {
    activeColor,
    headrest: false,
    wheelsCB: [false, false, false, true],
    modelCB: [true, false, false],
    colorCB,
    width: false,
    foam: false,
  };
  return initialState;
};

export default GenerateInitialState;
