const GenerateInitialState = () => {
  const initialState = {
    activeColor: "grey",
    headrest: false,
    wheelsCB: [false, false, false, true],
  };
  return initialState;
};

export default GenerateInitialState;
