import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/layout";
import LifeStyleCard from "../components/brands/BrandCard";
import BreadCrumbs, { BreadWrapper } from "../components/breadCrumbs";

const SectionContainer = styled.div`
  /* min-height: 100vh; */
  padding-left: 5px;
  padding-right: 5px;
  min-width: 320px;
  max-width: 1366px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 20px;
  scroll-behavior: smooth;
  display: grid;
  /* grid-template-rows: repeat(auto-fill, 1fr); */
  grid-template-columns: repeat(2, minmax(300px, 560px));
  grid-gap: 20px;
  align-items: stretch;
  justify-items: center;
  justify-content: center;
  align-content: flex-start;
  img {
    max-width: 100%;
    height: auto;
  }
  @media screen and (max-width: 650px) {
    grid-gap: 20px;
    grid-template-rows: repeat(auto-fit, minmax(220px, 228px));
    grid-template-columns: repeat(auto-fit, minmax(300px, 486px));
    margin-top: 0px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;
const Brands = ({ data }) => {
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
      <BreadWrapper hidenLarge>
        <BreadCrumbs here="Brands" />
      </BreadWrapper>
      <SectionContainer>
        {data.allDatoCmsBrand.nodes.map(brand => (
          <LifeStyleCard
            key={brand.id}
            mobileHeight="228px"
            height="228px"
            title={brand.displayName}
            bgImg={brand.lifeStyleImg}
            logo={brand.brandLogo}
            url={`/brands/${brand.urlName}`}
          >
            {brand.lifeStyleText}
          </LifeStyleCard>
        ))}
      </SectionContainer>
      <BreadWrapper hidenLarge Bottom>
        <BreadCrumbs here="Brands" />
      </BreadWrapper>
    </Layout>
  );
};

export const brandsSEO = graphql`
  query brandsSEO {
    datoCmsSeo(name: { eq: "brands" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allDatoCmsBrand(sort: { fields: position }) {
      nodes {
        id
        displayName
        urlName
        lifeStyleText
        lifeStyleImg {
          alt
          title
          fluid(
            maxWidth: 560
            imgixParams: { auto: "compress", lossless: true }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
        brandLogo {
          alt
          title
          url
        }
      }
    }
  }
`;

Brands.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Brands;
