import { useStaticQuery, graphql } from "gatsby";
import { sortProductByPrice } from "../helperFunctions";

export default () => {
  const { allMattresses } = useStaticQuery(
    graphql`
      query allMatts {
        allMattresses: allDatoCmsNewMattress {
          nodes {
            ...newMattressList
          }
        }
      }
    `
  );

  return sortProductByPrice(allMattresses.nodes);
};
