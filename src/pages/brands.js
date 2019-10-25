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
  grid-template-rows: repeat(auto-fit, minmax(220px, 228px));
  grid-template-columns: repeat(auto-fit, minmax(300px, 486px));
  grid-gap: 40px;
  justify-items: center;
  justify-content: center;
  img {
    margin: 5px;
  }
`;
const Brands = ({ data }) => {
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
      <SectionContainer>
        <img src={sealy} alt="stuff" />
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
