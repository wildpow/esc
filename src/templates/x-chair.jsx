import { graphql } from "gatsby";
import Layout from "../components/Layout";

export default function XChair({ data }) {
  const test = "X-Chair";
  return (
    <Layout>
      <div>
        <h1>X-Chair</h1>
        {console.log(test, data)}
      </div>
    </Layout>
  );
}

export const chairQuery = graphql`
  query chair($slug: String!, $headrest: String!, $wheels: String!) {
    datoCmsXChair(slug: { eq: $slug }) {
      title
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    headrest: shopifyProduct(storefrontId: { eq: $headrest }) {
      description
      title
      storefrontId
      variants {
        storefrontId
        price
        title
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
      images {
        gatsbyImageData(layout: CONSTRAINED, width: 150)
      }
    }
    wheels: shopifyProduct(storefrontId: { eq: $wheels }) {
      title
      storefrontId
      description
      variants {
        storefrontId
        price
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, width: 150)
        }
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
      images {
        gatsbyImageData(layout: CONSTRAINED, width: 150)
      }
    }
  }
`;
