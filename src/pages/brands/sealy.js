import React from "react";
import PropTypes from "prop-types";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import BreadCrumbs, { BreadWrapper } from "../../components/breadCrumbs";
import {
  MainWrapper,
  Wrapper,
  MainTitle,
  SealyImgPlace,
} from "../../styles/mattListStyles";
import SealyImg from "../../images/sealyLogo.png";
import MattressThumb from "../../components/mattThumbNail/mattThumb";

const Sealy = ({ data }) => {
  const { datoCmsSeo, allDatoCmsMattress } = data;
  return (
    <Layout>
      <MainWrapper>
        <HelmetDatoCms seo={datoCmsSeo.seoMetaTags} />
        <BreadWrapper Brands>
          <BreadCrumbs next="Brands" here="Sealy" />
        </BreadWrapper>
        <MainTitle>
          <SealyImgPlace
            src={SealyImg}
            alt="A logo of the Sealy mattress company"
          />
        </MainTitle>
        <Wrapper>
          {allDatoCmsMattress.nodes.map(mattress => {
            if (mattress.subline.name === "Golden Elegance") {
              return (
                <MattressThumb
                  key={mattress.id}
                  mattress={mattress}
                  url={`/brands/${mattress.brand.urlName}/${mattress.uri}`}
                />
              );
            }
            return null;
          })}
          {allDatoCmsMattress.nodes.map(mattress => {
            if (mattress.subline.name === "Essentials") {
              return (
                <MattressThumb
                  key={mattress.id}
                  mattress={mattress}
                  url={`/brands/${mattress.brand.urlName}/${mattress.uri}`}
                />
              );
            }
            return null;
          })}
          {allDatoCmsMattress.nodes.map(mattress => {
            if (mattress.subline.name === "Performance") {
              return (
                <MattressThumb
                  key={mattress.id}
                  mattress={mattress}
                  url={`/brands/${mattress.brand.urlName}/${mattress.uri}`}
                />
              );
            }
            return null;
          })}
          {allDatoCmsMattress.nodes.map(mattress => {
            if (mattress.subline.name === "Premium") {
              return (
                <MattressThumb
                  key={mattress.id}
                  mattress={mattress}
                  url={`/brands/${mattress.brand.urlName}/${mattress.uri}`}
                />
              );
            }
            return null;
          })}
        </Wrapper>
        <BreadWrapper Brands Bottom>
          <BreadCrumbs next="Brands" here="Sealy" />
        </BreadWrapper>
      </MainWrapper>
    </Layout>
  );
};

Sealy.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default Sealy;

export const allSealyMattresses = graphql`
  query allSealyMattresses {
    datoCmsSeo(name: { eq: "sealy mattresses" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }

    allDatoCmsMattress(
      filter: { brand: { urlName: { eq: "sealy" } } }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
  }
`;
