const GenerateInitialState = () => {
  const initialState = {
    activeColor: "grey",
    headrest: false,
    wheelsCB: [
      { checked: false, index: 0 },
      { checked: false, index: 1 },
      { checked: false, index: 2 },
      { checked: true, index: 3 },
    ],
  };
  return initialState;
};

export default GenerateInitialState;
