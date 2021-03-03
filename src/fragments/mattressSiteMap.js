/* eslint-disable import/prefer-default-export */
import { graphql } from "gatsby";

export const mattressSiteMap = graphql`
  fragment mattressSiteMap on DatoCmsNewMattress {
    slug
    name
    id
    subline {
      name
    }
    brand {
      urlName
      displayName
    }
  }
`;
