import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import LifeStyleCard from "../components/Brands/LifeStyleCard";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";
import Header from "../components/shared/ProductList/Header";

const SectionContainer = styled.div`
  /* min-height: 100vh; */
  padding-left: 5px;
  padding-right: 5px;
  min-width: 320px;
  max-width: 1440px;
  margin: auto;
  padding-top: 0px;
  /* margin-bottom: 20px; */
  /* padding-bottom: 25px; */
  scroll-behavior: smooth;
  display: grid;
  /* grid-template-rows: repeat(auto-fill, 1fr); */
  grid-template-columns: repeat(2, minmax(300px, 720px));
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
const Brands = ({ data }) => {
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
      <BreadWrapper hidenLarge>
        <BreadCrumbs here="Brands" />
      </BreadWrapper>
      <BrandsRoot>
        <Header
          description={data.datoCmsHeader.tagLine}
          headerBG={data.datoCmsHeader.bgImg.url}
          button={{ label: "Shop all Mattresses", url: "/brands/list" }}
          title="Our Brands"
        />
        <SectionContainer>
          {data.allDatoCmsBrand.nodes.map((brand) => (
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
      </BrandsRoot>
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
