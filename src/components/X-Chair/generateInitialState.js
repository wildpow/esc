const GenerateInitialState = () => {
  const initialState = {
    activeColor: "grey",
    headrest: false,
    wheelsCB: [false, false, false, true],
    modelCB: [true, false, false],
    width: false,
  };
  return initialState;
};

export default GenerateInitialState;
