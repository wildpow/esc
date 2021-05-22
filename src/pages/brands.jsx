import styled from "styled-components";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";
import Header from "../components/ProductListing/ProductListingHeader";
import LifeStyleCard from "../components/BrandsCard";
import TestCard from "../components/BrandsCard/test";

const NewSectionContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  padding-top: 15px;
  max-width: 1536px;
  grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
  grid-gap: 1em;
`;
const SectionContainer = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  min-width: 320px;
  max-width: 1536px;
  margin: auto;
  padding-top: 0px;
  scroll-behavior: smooth;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 760px));
  grid-gap: 20px;
  align-items: stretch;
  justify-items: center;
  justify-content: center;
  align-content: flex-start;
  padding-top: 10px;
  img {
    max-width: 100%;
    height: auto;
  }
  @media screen and (max-width: 650px) {
    grid-gap: 20px;
    grid-template-rows: repeat(auto-fit, minmax(220px, 228px));
    grid-template-columns: repeat(auto-fit, minmax(300px, 486px));
    padding-top: 0px;
    padding-left: 5px;
    padding-right: 5px;
  }
  @media screen and (min-width: 1022px) {
    padding-top: 20px;
    padding-bottom: 40px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;
const BrandsRoot = styled.div`
  @media (min-width: 1022px) {
    padding-top: 20px;
  }
`;
export default function Brands({ data }) {
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
      <BreadWrapper hiddenLarge>
        <BreadCrumbs here="Brands" />
      </BreadWrapper>
      <BrandsRoot>
        <Header
          description={data.datoCmsHeader.tagLine}
          headerBG={data.datoCmsHeader.bgImg.url}
          button={{ label: "Shop all Mattresses", url: "/brands/list" }}
          title="Our Brands"
        />
        <NewSectionContainer>
          {data.allDatoCmsBrand.nodes.map((brand) => (
            <TestCard
              key={brand.id}
              description={brand.lifeStyleText}
              title={brand.displayName}
              bgImg={brand.lifeStyleImg}
              logo={brand.brandLogo}
              url={`/brands/${brand.urlName}`}
            />
          ))}
        </NewSectionContainer>
      </BrandsRoot>
      <BreadWrapper hiddenLarge>
        <BreadCrumbs here="Brands" />
      </BreadWrapper>
    </Layout>
  );
}
export const brandsSEO = graphql`
  query brandsSEO {
    datoCmsSeo(name: { eq: "brands" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    datoCmsHeader(title: { eq: "AllMattressSort" }) {
      title
      tagLine
      bgImg {
        title
        alt
        url
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
          gatsbyImageData(layout: FULL_WIDTH)
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
