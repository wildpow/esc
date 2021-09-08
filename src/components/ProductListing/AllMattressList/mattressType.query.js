import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const { types } = useStaticQuery(
    graphql`
      query mattressType {
        types: allDatoCmsMattressType(sort: { fields: position }) {
          nodes {
            title
            position
            description
            slug
          }
        }
      }
    `
  );
  const initialState = { selectedTypesCheckBoxes: [], typeCheckBoxes: [] };
  types.nodes.forEach((element, i) => {
    initialState.typeCheckBoxes.push({
      id: i,
      description: element.description,
      checked: false,
      urlParam: element.slug,
      displayName: element.title,
    });
  });
  return initialState;
};
