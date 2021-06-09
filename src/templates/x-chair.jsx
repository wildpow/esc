/* eslint-disable react/prop-types */
import { graphql } from "gatsby";
import { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

export default function XChair(props) {
  const { pageContext, data } = props;
  const { datoCmsXChair, headrest, wheels } = data;
  const { images } = pageContext;
  const [headrestBool, setHeadrestBool] = useState(false);
  return (
    <Layout>
      <div>
        <h1>X-Chair</h1>
        {console.log(headrest.images[0])}
        <div>
          <h2>Headrest</h2>
          <div>
            <div>
              <input type="checkbox" id="noHeadrest" />
              <label htmlFor="noHeadrest">
                <GatsbyImage image={getImage(headrest.images[0])} />
              </label>
            </div>
          </div>
        </div>
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
      shopifyInfo {
        variants {
          compareAtPrice
          price
          storefrontId
          title
          image {
            gatsbyImageData(layout: FIXED, width: 150)
          }
        }
        title
        description
        hasOnlyDefaultVariant
        images {
          gatsbyImageData(layout: FIXED, width: 50)
          altText
        }
        featuredImage {
          gatsbyImageData(width: 50, layout: FIXED)
        }
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
          }
        }
        productType
        storefrontId
        totalVariants
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
