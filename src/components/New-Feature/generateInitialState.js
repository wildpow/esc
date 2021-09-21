const filterCurrentMattresses = (mattresses, brands, comfort, type) => {
  let newMattresses = mattresses;
  if (brands.length === 0 && comfort.length === 0 && type.length === 0) {
    return mattresses;
  }
  if (brands.length >= 1) {
    newMattresses = newMattresses.filter((matt) =>
      brands.includes(matt.brand.urlName)
    );
  }
  if (comfort.length >= 1) {
    newMattresses = newMattresses.filter((matt) =>
      comfort.includes(matt.firmness)
    );
  }
  if (type.length >= 1) {
    newMattresses = newMattresses.filter((t) =>
      type.includes(t.mattressType.slug)
    );
  }
  return newMattresses;
};
const GenerateInitialState = (initialFilterState, headers, allMattresses) => ({
  beforeFilterMattresses: allMattresses,
  currentMattresses: filterCurrentMattresses(
    allMattresses,
    initialFilterState.brand.selectedBrandCheckBoxes,
    initialFilterState.comfort.selectedComfortCheckBoxes,
    initialFilterState.type.selectedTypeCheckBoxes
  ),
  ...initialFilterState.brand,
  ...initialFilterState.type,
  ...initialFilterState.comfort,
  headers: headers.brandHeaders,
  currentHeader:
    initialFilterState.brand.selectedBrandCheckBoxes.length === 1
      ? headers.brandHeaders[
          initialFilterState.brand.selectedBrandCheckBoxes[0]
        ]
      : headers.brandHeaders.all,
});

export default GenerateInitialState;
