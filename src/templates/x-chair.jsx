/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { graphql } from "gatsby";
import { useState } from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import getNoHeadrest from "../components/X-Chair/getNoHeadrest.query";

const Checkbox = styled.div`
  background-color: white;
  padding: 20px;
  .borderOneInput {
    display: none;
  }
  .borderOneLabel {
    border-top: 1px solid transparent;
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
    /* border-bottom: 4px solid transparent; */
    outline: 1px solid #dadada;
    padding: 10px 10px 0 10px;
    display: block;
    position: relative;
    /* margin: 10px; */
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .borderOneLabel::after {
    height: 4px;
    position: absolute;
    content: "";
    width: calc(100% + 2px);
    left: -1px;
    bottom: 0;
    background-color: transparent;
    transition: all 0.2s ease-in-out;
  }
  .borderOneInput:hover + .borderOneLabel::after {
    background-color: #ec1221;
  }
  .borderOneInput:checked + .borderOneLabel::after {
    background-color: #ec1221;
  }
  .borderOneLabel::before {
    background-color: white;
    color: white;
    content: " ";
    display: block;
    border-radius: 50%;
    border: 1px solid grey;
    position: absolute;
    top: -12px;
    left: -12px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 31px;
    transition-duration: 0.4s;
    transform: scale(0);
    z-index: 10;
  }
  .borderOneLabel div {
    height: 100px;
    width: 120px;
    transition-duration: 0.2s;
    transform-origin: 50% 50%;
  }
  .borderOneInput:hover + label {
    border-top: 1px solid #ec1221;
    border-right: 1px solid #ec1221;
    border-left: 1px solid #ec1221;
    /* border-bottom: 4px solid #ec1221; */
  }
  .borderOneInput:checked + label {
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    /* border-bottom: 4px solid #ec1221; */
  }
  .borderOneInput:checked + label::before {
    content: "✓";
    background-color: grey;
    transform: scale(1);
  }
  .borderOneInput:checked:checked + label div {
    transform: scale(1);
    z-index: -1;
  }
`;
// TODO Sending image paths throuhg page context does not work with StaticImage
// TODO Need to use filesystem source plug-in instead..
export default function XChair(props) {
  const { pageContext, data } = props;
  const { datoCmsXChair, headrest, wheels, memoryFoam, width } = data;
  const { images } = pageContext;
  const stuff = getNoHeadrest(datoCmsXChair.title);
  const [headrestBool, setHeadrestBool] = useState(false);
  return (
    <Layout>
      <div>
        <h1>X-Chair</h1>
        {console.log(stuff)}
        {/* <StaticImage
          src="../images/xChair/xOne/x-1 gray side headrest.jpg"
          layout="constrained"
          width={150}
          height={103}
        /> */}
        <div>
          <h2>Headrest</h2>
          <div style={{ display: "flex" }}>
            <Checkbox>
              <input
                type="checkbox"
                id="noHeadrest"
                className="borderOneInput"
                onChange={() => setHeadrestBool(!headrestBool)}
                checked={!headrestBool}
              />
              <label htmlFor="noHeadrest" className="borderOneLabel">
                <div>
                  <StaticImage
                    src="../images/xChair/xFour/noHeadrest.jpeg"
                    layout="constrained"
                    width={150}
                    height={103}
                    alt="alt stuff"
                  />
                </div>
              </label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                id="headrest"
                className="borderOneInput"
                onChange={() => setHeadrestBool(!headrestBool)}
                checked={headrestBool}
              />
              <label htmlFor="headrest" className="borderOneLabel">
                <div>
                  <GatsbyImage
                    image={getImage(headrest.images[0])}
                    alt="alt stuff"
                  />
                </div>
              </label>
            </Checkbox>
          </div>
        </div>
      </div>
      <div>
        <h2>Wheels</h2>
        <div style={{ display: "flex" }}>
          <Checkbox>
            <input type="checkbox" id="noHeadrest" className="borderOneInput" />
            <label htmlFor="noHeadrest" className="borderOneLabel">
              <div>
                <StaticImage
                  alt="alt stuff"
                  src="../images/xChair/standardCasterSet.jpeg"
                  layout="constrained"
                  width={150}
                  height={103}
                />
              </div>
            </label>
          </Checkbox>
          {wheels.variants.map((wheel) => (
            <Checkbox key={wheel.title}>
              <input
                type="checkbox"
                id="headrest"
                className="borderOneInput"
                // onChange={() => setHeadrestBool(!headrestBool)}
                // checked={headrestBool}
              />
              <label htmlFor="headrest" className="borderOneLabel">
                <div>
                  <GatsbyImage
                    image={wheel.image.gatsbyImageData}
                    alt="alt stuff"
                  />
                </div>
              </label>
            </Checkbox>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const chairQuery = graphql`
  query chair(
    $slug: String!
    $headrest: String!
    $wheels: String!
    $memoryFoam: String
  ) {
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
    memoryFoam: shopifyProduct(storefrontId: { eq: $memoryFoam }) {
      description
      title
      storefrontId
      images {
        gatsbyImageData(layout: CONSTRAINED, width: 290)
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
    }
    width: shopifyProduct(storefrontId: { eq: $memoryFoam }) {
      description
      title
      storefrontId
      images {
        gatsbyImageData(layout: CONSTRAINED, width: 290)
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
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
        gatsbyImageData(layout: CONSTRAINED, width: 290)
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
          gatsbyImageData(layout: CONSTRAINED, width: 350)
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
