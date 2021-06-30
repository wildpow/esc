const GenerateInitialState = (colorCB, activeColor, chairVariants) => {
  const initialState = {
    activeColor,
    activeHeadrest: "default",
    headrest: false,
    wheelsCB: [false, false, false, true],
    modelCB: [true, false, false],
    colorCB,
    width: false,
    foam: false,
    chairVariants,
    price: chairVariants[0].price,
  };
  return initialState;
};

export default GenerateInitialState;
