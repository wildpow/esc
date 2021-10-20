import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";
import Header from "../components/ProductListing/ProductListingHeader";
import BrandsCard from "../components/BrandsCard/BrandsCard";

const NewSectionContainer = styled.div`
  min-width: 320px;
  max-width: 1536px;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;
  grid-template-rows: repeat(auto-fit, minmax(220px, 228px));
  grid-template-columns: repeat(auto-fit, minmax(300px, 768px));
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  align-items: stretch;
  justify-items: center;
  justify-content: center;
  align-content: flex-start;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(300px, 790px));
    grid-template-rows: repeat(auto-fit, minmax(220px, 250px));
    padding-top: 20px;
  }
  @media (min-width: 1024px) {
    padding-bottom: 20px;
  }
  @media (min-width: 1536px) {
    padding-right: 0;
    padding-left: 0;
    grid-template-rows: repeat(auto-fit, minmax(220px, 275px));
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
        <Header headerData={data.datoCmsHeader} allBtnOption />
        <NewSectionContainer>
          {data.allDatoCmsBrand.nodes.map((brand) => (
            <BrandsCard
              key={brand.id}
              description={brand.lifeStyleText}
              title={brand.displayName}
              bgImg={brand.lifeStyleImg}
              logo={brand.brandLogo}
              url={`/brands/list?brand=${brand.urlName}`}
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
    datoCmsHeader(title: { eq: "Our Brands" }) {
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
