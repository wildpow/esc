import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const { brands } = useStaticQuery(
    graphql`
      query mattressBrands {
        brands: allDatoCmsBrand(sort: { fields: position }) {
          nodes {
            displayName
            urlName
            position
          }
        }
      }
    `
  );
  const brandState = { selectedBrandCheckBoxes: [], brandCheckBoxes: [] };
  const brandNames = [];
  brands.nodes.forEach((element) => {
    brandNames.push(element.urlName);
    brandState.brandCheckBoxes.push({
      checked: false,
      urlParam: element.urlName,
      displayName: element.displayName,
    });
  });
  return { brandState, brandNames };
};
