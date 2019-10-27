import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/layout";
import sealy from "../images/New Images/SealyBrandImage486x228.jpg";
import stearn from "../images/New Images/StearnsBrandImage486x228.jpg";
import tempur from "../images/New Images/TempurPedicBrandImage486x228.jpg";
import bedTech from "../images/New Images/BedTechBrandImage486x228.jpg";
import nectar from "../images/New Images/NectarBrandImage486x228.jpg";
import malouf from "../images/New Images/WellsvilleMaloufBrandImage486x228.jpg";
import BrandItem from "../components/brands/brand.item";
import sealylogo from "../images/New Images/SealyLogo245x100.png";

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  margin: auto;
  /* flex: 0 1 auto;
  flex-direction: column;
  justify-content: center; */
  /* padding: 5em 1em; */
  margin-top: 40px;
  scroll-behavior: smooth;
  display: grid;
  /* grid-template-rows: repeat(auto-fit, minmax(220px, 228px));
  grid-template-columns: repeat(auto-fit, minmax(300px, 486px));
  grid-gap: 40px;
  justify-items: center;
  justify-content: center; */
  grid-template-rows: repeat(auto-fill, 1fr 1fr 1fr);
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 486px) minmax(300px, 486px)
  );
  grid-gap: 30px;
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
  }
`;
const Brands = ({ data }) => {
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
      <SectionContainer>
        <BrandItem cover={sealy} brand={sealylogo} route="/brands/sealy" />
        <img src={stearn} alt="stuff" />
        <img src={tempur} alt="stuff" />
        <img src={bedTech} alt="stuff" />
        <img src={malouf} alt="t" />
        <img src={nectar} alt="st" />
      </SectionContainer>
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
  }
`;

Brands.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Brands;
