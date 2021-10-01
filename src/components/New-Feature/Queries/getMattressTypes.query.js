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
  const initialState = {
    typeCheckBoxes: [],
    typeKeyList: [],
  };
  types.nodes.forEach((element) => {
    initialState.typeKeyList.push(element.slug);
    initialState.typeCheckBoxes.push({
      description: element.description,
      checked: false,
      urlParam: element.slug,
      displayName: element.title,
    });
  });
  return initialState;
};
