import React from "react";
import { Link, graphql } from "gatsby";
import { css, theme } from "twin.macro";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PropTypes from "prop-types";
import BreadCrumbs from "../components/BreadCrumbs";
import Layout from "../components/Layout";
import FadeIn from "../keyframes/fadeIn.styled";

const adjustableRoot = css`
  animation: ${FadeIn} 0.35s linear normal;
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  margin-right: 0px;
  padding-left: 5px;
  padding-right: 5px;
  @media (min-width: 1022px) {
    padding-bottom: 25px;
    padding-top: 25px;
  }
  @media (min-width: 1200px) {
    margin-left: 120px;
    margin-right: 120px;
  }
  .adjustable__card {
    text-decoration: none;
    margin-left: 2px;
    margin-right: 2px;
    color: black;
    margin-bottom: 20px;
    border-radius: 0.14rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px,
      rgba(71, 63, 79, 0.08) 0px 2px 4px;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0px 4px 8px rgba(46, 41, 51, 0.08),
        0px 8px 16px rgba(71, 63, 79, 0.16);
    }
  }
  .adjustable__card__content {
    display: flex;
    justify-content: space-around;
    @media (min-width: 1024px) {
      justify-content: space-evenly;
    }
  }
`;
const adjustableFeatures = css`
  font-family: ${theme`fontFamily.serif`};
  padding: 0px;
  padding-top: 10px;
  h3 {
    border-bottom: 4px solid ${theme`colors.rose.800`};
    font-size: 1.3rem;
    color: ${theme`colors.lightBlue["900"]`};
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 2px;
    padding-left: 20px;
  }
  ul {
    list-style: square;
    margin-top: 10px;
    padding-right: 10px;
    font-size: 1rem;
  }
  li {
    line-height: 1.35rem;
    padding-bottom: 2px;
    font-size: 0.9rem;
    color: ${theme`colors.blueGray["700"]`};
  }
  @media (min-width: 640px) {
    h3 {
      font-size: 1.4rem;
    }
  }
  @media (min-width: 731px) {
    h3 {
      padding-bottom: 3px;
      font-size: 1.6rem;
    }
    li {
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
  }
  @media (min-width: 992px) {
    h3 {
      font-size: 1.8rem;
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 2px;
    }
    ul {
      margin-top: 10px;
    }
    li {
      padding-bottom: 2px;
      font-size: 1.2rem;
    }
  }
  @media (min-width: 1024px) {
    padding-top: 20px;
    h3 {
      font-size: 2rem;
      padding-bottom: 4px;
      font-weight: 700;
    }
    li {
      font-size: 1.4rem;
      line-height: 2.1rem;
      letter-spacing: 0.03rem;
    }
  }
  @media (min-width: 1300px) {
    h3 {
      font-size: 2rem;
      padding-left: 20px;
    }
  }
`;
const Adjustables = ({ data }) => {
  const { allDatoCmsProduct } = data;
  const sortedBases = allDatoCmsProduct.nodes.sort(
    (a, b) =>
      Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
      Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount)
  );
  return (
    <Layout>
      <section className={adjustableRoot}>
        <BreadCrumbs here="Adjustable" hidenLarge />
        <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
        {sortedBases.map((base) => (
          <Link
            to={`/adjustable/${base.slug}`}
            key={base.id}
            className="adjustable__card"
          >
            <h3>{base.title}</h3>
            <div className="adjustable__card__content">
              <div className="ImageWrapper">
                <div className="BannerWrapper">
                  {base.saleBanner.length > 3 && (
                    <div className="Banner">{base.saleBanner}</div>
                  )}
                  <div className="ImageContainer">
                    <GatsbyImage
                      image={getImage(base.threeImageBlock[0].coverImage)}
                      alt={base.threeImageBlock[0].coverImage.alt}
                    />
                  </div>
                </div>
              </div>
              <div className="FeaturePriceWrapper">
                <div className={adjustableFeatures}>
                  <h3>Features</h3>
                  <ul>
                    {base.productFeatures.map((item) => (
                      <li key={item.id}>{item.title}</li>
                    ))}
                  </ul>
                </div>
                <div className="PriceRangeLg">
                  {`$${Math.trunc(
                    base.shopifyInfo[0].priceRange.minVariantPrice.amount
                  )}
          - $${Math.trunc(
            base.shopifyInfo[0].priceRange.maxVariantPrice.amount
          )}`}
                </div>
              </div>
            </div>
            <div className="PriceRangeSm">
              {`$${Math.trunc(
                base.shopifyInfo[0].priceRange.minVariantPrice.amount
              )}
          - $${Math.trunc(
            base.shopifyInfo[0].priceRange.maxVariantPrice.amount
          )}`}
            </div>
          </Link>
        ))}
        <BreadCrumbs here="Adjustable" hidenLarge Bottom />
      </section>
    </Layout>
  );
};

export default Adjustables;
Adjustables.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const allAdjustables = graphql`
  query allAjustables {
    datoCmsSeo(name: { eq: "adjustable" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }

    allDatoCmsProduct(
      filter: { typeOfProduct: { title: { eq: "Adjustable" } } }
    ) {
      nodes {
        title
        saleBanner
        id
        slug
        productFeatures {
          title
          description
          id
        }
        shopifyInfo {
          priceRange {
            minVariantPrice {
              amount
            }
            maxVariantPrice {
              amount
            }
          }
        }
        threeImageBlock {
          coverImage {
            alt
            gatsbyImageData(layout: CONSTRAINED, width: 350)
          }
        }
      }
    }
  }
`;
