import { useStaticQuery, graphql } from "gatsby";
import { sortProductByPrice } from "../../../Mattresses/helperFunctions";

export default () => {
  const { mattresses } = useStaticQuery(
    graphql`
      query newFeatureAllMattresses {
        mattresses: allDatoCmsNewMattress {
          nodes {
            ...newMattressList
          }
        }
      }
    `
  );

  return sortProductByPrice(mattresses.nodes);
};
