function generateColorCheckboxes(num) {
  // Function generates state for color checkboxs feature
  // input should be the length of all color options from CMS
  const temp = Array(num).fill(false);
  temp[0] = true;
  return temp;
}
const GenerateInitialState = (
  colorCB,
  activeColor,
  chairVariants,
  chairData
) => {
  const initialState = {
    activeColor: chairData.colors[0].colorTitle,
    activeChairIndex: 0,
    activeHeadrest: "default",
    headrest: 0,
    wheelsCB: [false, false, false],
    modelCB: [true, false, false],
    colorCB: generateColorCheckboxes(
      chairData.colors.length +
        chairData.premiumLeather.length +
        chairData.brisa.length
    ),
    width: 0,
    foam: 0,
    chairVariants: chairData.shopifyInfo[0].variants,
    price: chairData.shopifyInfo[0].price,
    compareAtPrice: chairData.shopifyInfo[0].compareAtPrice,
    activeWheelIndex: 0,
    activeModelIndex: 0,
  };
  return initialState;
};

export default GenerateInitialState;
