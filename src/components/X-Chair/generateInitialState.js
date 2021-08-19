function generateColorCheckboxes(num) {
  // Function generates state for color checkboxs feature
  // input should be the length of all color options from CMS
  const temp = Array(num).fill(false);
  temp[0] = true;
  return temp;
}
function generateColorData(mainColors, extra1, extra2) {
  // combines gallery acrossed each fabric and creates color swatchs for color feature component
  const colorData = {};
  const mainColorSwatchs = [];
  const extraColorSwatchs = [];
  const extraColorSwatchs2 = [];
  let extraColors = null;
  let indexCount = 0;
  if (extra1.length !== 0 && extra2.length !== 0) {
    mainColors.forEach((element, index) => {
      colorData[element.colorTitle] = {
        default: element.default,
        headrest: element.withHeadrestImages,
      };
      mainColorSwatchs.push({
        title: element.colorTitle,
        img: element.colorSwatch.gatsbyImageData,
        alt: element.colorSwatch.alt,
        index,
      });
      indexCount = index;
    });
    extra1.forEach((element) => {
      colorData[element.colorTitle] = {
        default: element.default,
        headrest: element.withHeadrestImages,
      };
      extraColorSwatchs.push({
        title: element.colorTitle,
        img: element.colorSwatch.gatsbyImageData,
        alt: element.colorSwatch.alt,
        index: indexCount + 1,
      });
      indexCount += 1;
    });
    extra2.forEach((element) => {
      colorData[element.colorTitle] = {
        default: element.default,
        headrest: element.withHeadrestImages,
      };
      extraColorSwatchs2.push({
        title: element.colorTitle,
        img: element.colorSwatch.gatsbyImageData,
        alt: element.colorSwatch.alt,
        index: indexCount + 1,
      });
      indexCount += 1;
    });
    extraColors = {
      "Premium Leather": extraColorSwatchs,
      Brisa: extraColorSwatchs2,
    };
  } else {
    mainColors.forEach((element, index) => {
      colorData[element.colorTitle] = {
        default: element.default,
        headrest: element.withHeadrestImages,
      };
      mainColorSwatchs.push({
        title: element.colorTitle,
        img: element.colorSwatch.gatsbyImageData,
        alt: element.colorSwatch.alt,
        index,
      });
    });
  }
  return {
    allColorData: colorData,
    mainSwatches: mainColorSwatchs,
    extraColors,
  };
}

const GenerateInitialState = (chairData) => {
  const colorData = generateColorData(
    chairData.colors,
    chairData.premiumLeather,
    chairData.brisa
  );
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
    price: chairData.shopifyInfo[0].variants[0].price,
    compareAtPrice: chairData.shopifyInfo[0].variants[0].compareAtPrice,
    activeWheelIndex: 0,
    activeModelIndex: 0,
  };
  return { initialState, colorData };
};

export default GenerateInitialState;
