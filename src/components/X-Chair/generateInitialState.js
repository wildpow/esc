const GenerateInitialState = (colorCB, activeColor, chairVariants) => {
  const initialState = {
    activeColor,
    activeChairIndex: 0,
    activeHeadrest: "default",
    headrest: 0,
    wheelsCB: [false, false, false],
    modelCB: [true, false, false],
    colorCB,
    width: 0,
    foam: 0,
    chairVariants,
    price: chairVariants[0].price,
    compareAtPrice: chairVariants[0].compareAtPrice,
    activeWheelIndex: 0,
    activeModelIndex: 0,
  };
  return initialState;
};

export default GenerateInitialState;
