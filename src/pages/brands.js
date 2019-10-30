import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/layout";
import sealylogo from "../images/new/SealyLogo245x100.png";
import BgImage from "../components/brands/bgImg";
import stearnLogo from "../images/new/StearnsLogo245x100.png";
import tempurLogo from "../images/new/TempurPedicLogo245x100.png";
import bedTechLogo from "../images/new/BedTechLogo245x100.png";
import maloufLogo from "../images/new/MaloufLogo245x100.png";
import nectarLogo from "../images/new/NectarLogo245x100.png";

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  margin: auto;
  margin-top: 40px;
  scroll-behavior: smooth;
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr 1fr 1fr);
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 560px) minmax(300px, 560px)
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
    margin-top: 20px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;
const Brands = ({ data }) => {
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
      <SectionContainer>
        <BgImage
          mobileHeight="228px"
          height="228px"
          title="sealy"
          fluid={data.sealy.childImageSharp.fluid}
          brand={sealylogo}
          url="/brands/sealy"
        >
          Designed to deliver support where you need it most, Sealy supports
          you.
        </BgImage>
        <BgImage
          mobileHeight="228px"
          height="228px"
          title="stearns"
          fluid={data.stearns.childImageSharp.fluid}
          brand={stearnLogo}
          url="/brands/stearns"
        >
          Artfully crafted with a purposeful design. Stearns & Foster - uncover
          exceptional.
        </BgImage>
        <BgImage
          mobileHeight="228px"
          height="228px"
          title="tempur"
          fluid={data.tempur.childImageSharp.fluid}
          brand={tempurLogo}
          url="/brands/tempurpedic"
        >
          Tempur-Pedic is the most highly recommended bed in America, feel the
          difference.
        </BgImage>
        <BgImage
          mobileHeight="228px"
          height="228px"
          title="bedTech"
          fluid={data.bedTech.childImageSharp.fluid}
          brand={bedTechLogo}
          url="/brands/bedtech"
        >
          Making a commitment to better sleep, BedTech is constantly innovating.
        </BgImage>
        <BgImage
          mobileHeight="228px"
          height="228px"
          title="malouf"
          fluid={data.malouf.childImageSharp.fluid}
          brand={maloufLogo}
          url="/brands/malouf"
        >
          Bringing quality comfort into your home, Malouf helps you sleep
          better.
        </BgImage>
        <BgImage
          mobileHeight="228px"
          height="228px"
          title="nectar"
          fluid={data.nectar.childImageSharp.fluid}
          brand={nectarLogo}
          url="/brands/nectar"
        >
          Inspired by sleepers like you, the Nectar mattress is like sleeping on
          a cloud.
        </BgImage>
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
    sealy: file(relativePath: { eq: "SealyBrandImage560x228.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 560, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    stearns: file(relativePath: { eq: "StearnsBrandImage560x228.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 560, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tempur: file(relativePath: { eq: "TempurPedicBrandImage560x228.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 560, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bedTech: file(relativePath: { eq: "BedTechBrandImage560x228.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 560, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    malouf: file(
      relativePath: { eq: "WellsvilleMaloufBrandImage560x228.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 560, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nectar: file(relativePath: { eq: "NectarBrandImage560x228.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 560, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

Brands.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Brands;
